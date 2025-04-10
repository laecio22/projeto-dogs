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

export const GET_PHOTOS = ({ page, total, user }) => {
  return {
    url: `${BASE_URL}/api/photo?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

export const PHOTO_GET = (id) => {
  return {
    url: `${BASE_URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

export const COMMENT_POST = (id, token, comment) => {
  return {
    url: `${BASE_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(comment),
    },
  };
};

export const PHOTO_DELETE = (id, token) => {
  return {
    url: `${BASE_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
};

export const GET_PHOTO = (id) => {
  return {
    url: `${BASE_URL}/api/photo/${id}`,
  };
};
