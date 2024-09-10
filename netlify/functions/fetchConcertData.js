// netlify/functions/fetchConcertData.js
const axios = require('axios');

exports.handler = async function (event, context) {
  try {
    const response = await axios.get(
      `http://api.kcisa.kr/openapi/API_CCA_148/request?serviceKey=8fc2a397-2091-4a0d-abc9-20c0ab5c9dac&numOfRows=10&pageNo=1`
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data.response.body.items),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
