import * as config from "../config/config";
import { authHeader } from "../services/http.header";

export const userService = {
  login,getUserData,register,getUsers
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  return fetch(`${config.apiUrl}/users/login/`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      return user;
    });
}
function register(name, email, password, role) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, role }),
  };

  return fetch(`${config.apiUrl}/users/register/`, requestOptions)
    .then(handleResponse)
    .then((user) => {
      return user;
    });
}

function getUsers(page=1) {
  console.log(page,'pageeee')
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${config.apiUrl}/users/list?page=${page}`, requestOptions).then(
    handleResponse
  );
}


function getUserData() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`${config.apiUrl}/users/me/`, requestOptions).then(
    handleResponse
  );
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
