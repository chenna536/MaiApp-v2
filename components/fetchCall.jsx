// const fetch = require("node-fetch");
const axios = require('axios');

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
      console.log(result.data);
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

export default fetchData;

// const sendResponse = async(URL, parameters) => {
//     let result = {data:{}}
//     await axios({
//       method: 'post',
//       url: URL,
//       data: parameters,
//       headers: {
//         'Content-Type': 'application/json',
//         'x-access-token': access_token,
//        }
//     })
//     .then(
//         response => {
//           result.data = response
//             // result.status = response.data.data.progress.toFixed(0);
//             console.log((response.data.data.progress).toFixed(0));
//             return response;
//         }
//     ).catch(error => {
//         console.log('error :', error);
//         result.status="ERROR";
//         return result;
//     })
// }
