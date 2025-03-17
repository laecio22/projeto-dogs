const BASE_URL = "https://dogsapi.origamid.dev/json";

export const TOKEN_CREATE = (body) => {
  return {
    url: BASE_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const TOKEN_VALIDATE = (token) => {
  return {
    url: BASE_URL + "/jwt-auth/v1/token/validate",

    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
};

export const GET_USER = (token) => {
  return {
    url: BASE_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
};

export const USER_POST = (body) => {
  return {
    url: BASE_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
};

export const PHOTO_POST = (formData, token) => {  
  return {
    url: BASE_URL + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },

      body: formData,
    },
  };
};
