const Responses = {
  successfulResponse(data = {}) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      statusCode: 200,
      body: data,
    };
  },

  failedResponse(data = {}) {
    return {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      statusCode: 500,
      body: data,
    };
  },
};
module.exports = Responses;
