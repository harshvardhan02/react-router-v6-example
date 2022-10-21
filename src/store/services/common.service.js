import axios from 'axios';

const config = {
  apiUrl: 'http://localhost:2001/api/v1',
  apiBaseUrl: ''
}

export const commonService = {
  postDataWithToken,
  withOutToken,
  getWithOutToken,
  putDataWithToken,
  getDataWithToken,
  withTokenAndFormData,
  handleResponse,
  withOutTokenAndBaseUrl,
  getDataWithTokenAndBaseUrl,
  getMessageById,
  getChatById
};

//-- It's common function for using the token
//-- get data
async function getDataWithToken(apiName, userData) {
  console.log(userData)
  // let token = JSON.parse(sessionStorage.getItem('token'));
  const response = await axios.request({
    method: 'GET',
    url: `${config.apiUrl + apiName}/${userData.id}`,
    // headers: { 'Content-Type': 'application/json', 'access_token': token },
    // params: userData
  });
  return handleResponse(response);
}

async function getMessageById(apiName, userData) {
  console.log(userData)
  // let token = JSON.parse(sessionStorage.getItem('token'));
  const response = await axios.request({
    method: 'GET',
    url: `${config.apiUrl + apiName}/${userData.chatId}/messages`,
    // headers: { 'Content-Type': 'application/json', 'access_token': token },
    // params: userData
  });
  return handleResponse(response);
}

async function getChatById(apiName, userData) {
  console.log(userData)
  // let token = JSON.parse(sessionStorage.getItem('token'));
  const response = await axios.request({
    method: 'GET',
    url: `${config.apiUrl + apiName}/${userData.chatId}/${userData.userId}`,
    // headers: { 'Content-Type': 'application/json', 'access_token': token },
    // params: userData
  });
  return handleResponse(response);
}

//-- It's common function for using the token
async function postDataWithToken(apiName, data) {
  let tokenObj = JSON.parse(sessionStorage.getItem("token"))
  const handleResponse = await axios({
    method: 'POST',
    url: `${config.apiUrl + apiName}`,
    headers: { 'Content-Type': 'application/json', 'access_token': tokenObj },
    data: data
  });
  return handleResponse;
};

//-- It's common function for using the token with Put method
async function putDataWithToken(apiName, data) {
  let tokenObj = JSON.parse(sessionStorage.getItem("token"))
  const handleResponse = await axios({
    method: 'PUT',
    url: `${config.apiUrl + apiName}`,
    headers: { 'Content-Type': 'application/json', 'access_token': tokenObj },
    data: data
  });
  return handleResponse;
};

//-- It's common function for using without token
async function withOutToken(apiName, data) {
  const response = await axios({
    method: 'POST',
    url: `${config.apiUrl + apiName}`,
    data: data
  });
  return handleResponse(response);
};

async function getWithOutToken(apiName, data) {
  const response = await axios({
    method: 'GET',
    url: `${config.apiUrl + apiName}`,
    data: data
  });
  return handleResponse(response);
};

//-- It's common function for using without token
async function withOutTokenAndBaseUrl(apiName, data) {
  const response = await axios({
    method: 'POST',
    url: `${config.apiBaseUrl + apiName}`,
    data: data
  });
  return handleResponse(response);
};

async function getDataWithTokenAndBaseUrl(apiName, data) {
  const response = await axios({
    method: 'GET',
    url: `${config.apiBaseUrl + apiName + '/' + data}`
  });
  return handleResponse(response);
};

//-- It's common function for using with form data
async function withTokenAndFormData(apiName, data) {
  let tokenObj = JSON.parse(sessionStorage.getItem("token"))
  const handleResponse = await axios({
    method: 'POST',
    url: `${config.apiUrl + apiName}`,
    headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${tokenObj}` },
    data: data
  });
  return handleResponse;
};

function handleResponse(response) {
  //console.log('response', response);
  if (response.status === 200 || response.status === 201) {
    return response;
  } else {
    const error = response;
    return Promise.reject(error);
  }
}