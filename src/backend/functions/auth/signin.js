'use strict';
// import jwt_decode from "jwt-decode";
// import {
//   CognitoUser,
//   CognitoUserPool,
//   AuthenticationDetails,
// } from "amazon-cognito-identity-js";

// const AWS = require("aws-sdk");
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const jwt_decode = require('jwt-decode');
const CognitoUser = AmazonCognitoIdentity.CognitoUser;
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AuthenticationDetails = AmazonCognitoIdentity.AuthenticationDetails;

const userPoolId = process.env.USER_POOL_ID;
const userPoolClient = process.env.USER_POOL_CLIENT;

const poolData = {
  UserPoolId: userPoolId,
  ClientId: userPoolClient,
};

const userPool = new CognitoUserPool(poolData);

module.exports.signIn = (event, context, callback) => {
  console.log('Pool Data', poolData);
  if (event.httpMethod === 'POST' && event.body) {
    // let response;
    const { email, password } = JSON.parse(event.body);

    const authenticationData = {
      Username: email,
      Password: password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: email,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log('Login success results: ', result);
        console.log('ID Token: ', result.getIdToken().getJwtToken());
        const idTokenDecoded = jwt_decode(result.getIdToken().getJwtToken());

        console.log('Decoded token: ', idTokenDecoded);
        const response = {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
          body: JSON.stringify({
            message: 'User successfully authenticated',
            idToken: idTokenDecoded,
            success: result.getIdToken().getJwtToken(),
          }),
        };
        callback(null, response);
      },
      onFailure: (error) => {
        console.log('Login error: ', error);
        const response = {
          statusCode: error.statusCode || 500,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
          },
          body: JSON.stringify({
            message: error.message,
          }),
        };
        callback(null, response);
      },
    });
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
