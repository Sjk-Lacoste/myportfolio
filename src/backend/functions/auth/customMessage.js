const AWS = require('aws-sdk');
AWS.config.update({
  region: process.env.REGION || 'eu-central-1',
});
AWS.config.setPromisesDependency(require('bluebird'));
const CognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider({
  apiVersion: '2019-11-07',
  region: process.env.REGION || 'eu-central-1',
});

// This function confirms user and send email to them when added
module.exports.cognitoConfirmUser = (event, context, callback) =>
  Promise.resolve(event)
    .then(() => {
      console.log('Event: ', event);
      const confirmationCode = event.code;
      const username = event.username;
      const clientId = event.clientId;
      let params = {
        ClientId: clientId,
        ConfirmationCode: confirmationCode,
        Username: username,
      };
      // Validating the user
      CognitoIdentityServiceProvider.confirmSignUp(params, (err, data) => {
        if (err) {
          // an error occurred
          console.log(err, err.stack);
          callback(null, err);
        }
      });
    })
    .then(() => {
      let redirectURL = process.env.POST_REGISTRATION_VERIFICATION_REDIRECT_URL;
      var response = {
        statusCode: 302,
        headers: {
          Location: redirectURL,
        },
      };
      callback(null, response);
    })
    .catch(callback);

module.exports.cognitoConfirmUserMessage = (event, context, callback) => {
  console.log('Event: ', event);
  if (event.triggerSource === 'CustomMessage_SignUp') {
    console.log('Triggered!!!');
    const { codeParameter } = event.request;
    const { userName, region } = event;
    const { clientId } = event.callerContext;
    const { email } = event.request.userAttributes;
    const url =
      'https://0vdqqa6v9l.execute-api.eu-central-1.amazonaws.com/dev/redirect';

    const link = `<a href="${url}?code=${codeParameter}&username=${userName}&clientId=${clientId}&region=${region}&email=${email}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#FFFFFF;font-size:20px;border-style:solid;border-color:#5C68E2;border-width:10px 30px 10px 30px;display:inline-block;background:#5C68E2;border-radius:6px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:24px;width:auto;text-align:center;border-left-width:30px;border-right-width:30px">CONFIRM YOUR EMAIL</a>`;
    event.response.emailSubject = 'Email Confirmation - SjkFolio';
    event.response.emailMessage = `${link}`;
  } else if (event.triggerSource === 'CustomMessage_ForgotPassword') {
    console.log('Forgot password: ', event);
    console.log('Request: ', event.request);
    const { codeParameter } = event.request;
    event.response.emailSubject = 'Reset Password - WBD AGM';
    event.response.emailMessage = `<h1>${codeParameter}</h1>`;
  }

  console.log('Event: ', event);
  // CallBack to the lambda for the email trigger
  callback(null, event);
};
