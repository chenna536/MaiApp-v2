const axios = require('axios');

const childId = '5da6dd898443816cb0ebce7a';
const assessmentId = '5d7a40a3990bef19dd71b69f';
const mainAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYTZkYmRkODQ0MzgxNmNiMGViY2U3MCIsImlhdCI6MTU3MTIxNjYzOH0.0p9_PdTOdaObxQVywWojjgh-bcwrzHvZVJw6gul5tNM';

// const Url = `http://192.168.1.106:3000/api/v2.1/child/${childId}/genius/${assessmentId}`;

const Url = `https://dev.mai.family/api/v2.1/child/${childId}/genius/${assessmentId}`;

// const postURL = `http://192.168.1.106:3000/api/v2.1/child/${childId}/genius`;
const postURL = `https://dev.mai.family/api/v2.1/child/${childId}/genius`;

async function fetchData(URL, accessToken) {
  const result = { data: [], status: 'INIT' };
  result.status = 'loading';
  await axios.get(URL, {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': accessToken,
    },
  })
    .then((data) => {
      result.data = data;
      result.status = 'SUCCESS';
      // console.log(result.data);
      return result;
    })
    .catch((error) => {
      console.log('error :', error);
      result.status = 'ERROR';
      result.error = error;
      return result;
    });
  return result;
}

const sendResponse = async (postUrl, parameters) => {
  const result = { progress: [] };
  await axios({
    method: 'post',
    url: postUrl,
    data: parameters,
    headers: {
      'Content-Type': 'application/json',
      'X-Access-Token': mainAccessToken,
    },
  })
    .then((response) => {
      console.log('Progress:', (response.data.data.progress).toFixed(0));
      result.progress = (response.data.data.progress).toFixed(0);
      return result;
    }).catch((error) => {
      console.log('error :', error);
      result.status = `ERROR: ${error}`;
      return result;
    });
  return result;
};

const getAssessment = async () => {
  const response = await fetchData(Url, mainAccessToken);
  // await console.log(response);
  return response.data.data.data.questions;
};

getAssessment().then((ques) => ques.map(async (data) => {
  const questionId = data.question._id;
  const responseData = {
    geniusId: assessmentId,
    questionId,
    response: data.responseType.displayOptions[Math.floor(Math.random() * 7 - 0) + 0].id,
  };
  const getResponse = await sendResponse(postURL, responseData);
  console.log(data.responseType.displayOptions[Math.floor(Math.random() * 7 - 0) + 0].option);
  return getResponse;
})).then(() => console.log('Loaded')).catch((err) => console.log(err));
