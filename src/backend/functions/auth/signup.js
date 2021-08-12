'use strict';
const AWS = require('aws-sdk');
// Set the region
AWS.config.update({ region: process.env.REGION || 'eu-central-1' });
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUser = AmazonCognitoIdentity.CognitoUser;
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AuthenticationDetails = AmazonCognitoIdentity.AuthenticationDetails;
const CognitoUserAttribute = AmazonCognitoIdentity.CognitoUserAttribute;
const jwt_decode = require('jwt-decode');
const uuid = require('../utils/helpers/uuid');
const response = require('../utils/responses');

// Create the DynamoDB service object
const db = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

const userPoolId = process.env.USER_POOL_ID;
const userPoolClient = process.env.USER_POOL_CLIENT;
const usersTable = process.env.USERS_TABLE;

const poolData = {
  UserPoolId: userPoolId,
  ClientId: userPoolClient,
};

const userPool = new CognitoUserPool(poolData);

module.exports.signUp = (event, context, callback) => {
  console.log('Event: ', event);

  if (event.httpMethod === 'POST' && event.body) {
    console.log('User pool id: ', userPoolId);
    console.log('User pool client: ', userPoolClient);
    console.log('Users table: ', usersTable);
    console.log('Event body', event.body);
    console.log(typeof event.body);
    const userId = uuid();

    const {
      email,
      password,
      companyName,
      ownerName,
      erfNumber,
      physicalAddress,
      postalAddress,
      firstName,
      lastName,
      phoneNumber,
      isOwner,
    } = JSON.parse(event.body);

    const attributesList = [];

    const dataEmail = {
      Name: 'email',
      Value: email,
    };

    const dataName = {
      Name: 'name',
      Value: `${firstName} ${lastName}`,
    };

    const dataUserId = {
      Name: 'custom:userId',
      Value: userId,
    };

    const dataFirstName = {
      Name: 'given_name',
      Value: firstName,
    };

    const dataLastName = {
      Name: 'family_name',
      Value: lastName,
    };

    const dataRole = {
      Name: 'custom:role',
      Value: 'user',
    };

    const dataPhoneNumber = {
      Name: 'phone_number',
      Value: phoneNumber,
    };

    attributesList.push(
      new CognitoUserAttribute(dataName),
      new CognitoUserAttribute(dataEmail),
      new CognitoUserAttribute(dataFirstName),
      new CognitoUserAttribute(dataLastName),
      new CognitoUserAttribute(dataRole),
      new CognitoUserAttribute(dataUserId),
      new CognitoUserAttribute(dataPhoneNumber)
    );

    console.log('Attribute List: ', attributesList);

    userPool.signUp(
      email,
      password,
      attributesList,
      null,
      (error, response) => {
        if (error) {
          console.log('Error: ', error);
          console.log('Error Status Code: ', error.statusCode);
          const body = JSON.stringify({ message: error.message });
          const res = responses.failedResponse(body);
          callback(null, res);
        } else {
          const cognitoUser = response.user;
          console.log('Response: ', response);
          console.log('Successfully registered: ', cognitoUser);
          const databaseParams = {
            userId: userId,
            email,
            companyName,
            ownerName,
            erfNumber,
            physicalAddress,
            postalAddress,
            firstName,
            lastName,
            phoneNumber,
            isOwner,
            userRole: 'user',
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
          };

          const params = {
            TableName: usersTable,
            Item: {
              ...databaseParams,
            },
          };

          db.put(params, (err, data) => {
            if (err) {
              console.log('DynamoDB Error: ', err);
              callback(null, {
                statusCode: err.statusCode || 400,
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Credentials': true,
                },
                body: JSON.stringify({
                  message: err.message,
                }),
              });
            } else {
              callback(null, {
                statusCode: 200,
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Credentials': true,
                },
                body: JSON.stringify({
                  message:
                    'Successfully registered, please check your email for confirmation',
                  user: cognitoUser,
                  data,
                }),
              });
            }
          });
        }
      }
    );
  } else {
    callback(null, {
      statusCode: 400,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify({
        message: 'Incorrect function call made. POST request required.',
      }),
    });
  }
};
