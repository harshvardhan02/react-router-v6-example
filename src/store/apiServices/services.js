import request from "./interceptor";

export async function getServiceDataWithToken(url, idToken) {
  return request
    .get(url, idToken)
    .then((response) => response)
    .catch((err) => err)
}

export async function getServiceData(url) {
  return request
    .get(url, idToken)
    .then((response) => response)
    .catch((err) => err)
}

export async function postServiceDataWithToken(url, idToken) {
  return request
    .put(url, idToken)
    .then((response) => response)
    .catch((err) => err)
}