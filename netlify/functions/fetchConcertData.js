// netlify/functions/fetchConcertData.js
const axios = require('axios');

exports.handler = async function (event, context) {
  try {
    const response = await axios.get(
      `http://api.kcisa.kr/openapi/API_CCA_142/request?serviceKey=0aa6219f-c8de-491e-86be-4f9077f9ddd1&numOfRows=10&pageNo=1&infoTp=007`
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
