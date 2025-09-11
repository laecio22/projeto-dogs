const BASE_URL = "https://dogsapi.origamid.dev/json";
import { IRequests } from "../types/IRequests.ts";
import { IUser } from "../types/IUser.ts";

export const TOKEN_CREATE = (body: FormData) => {
  const ObjectCreateToken: IRequests = {
    url: BASE_URL + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
  return ObjectCreateToken;
};

export const TOKEN_VALIDATE = (token: string) => {
  const ObjectValidateToken: IRequests = {
    url: BASE_URL + "/jwt-auth/v1/token/validate",

    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
  return ObjectValidateToken;
};

export const GET_USER = (token: string) => {
  const ObjectGetUser: IRequests = {
    url: BASE_URL + "/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
  return ObjectGetUser;
};

export const USER_POST = (body: FormData) => {
  const ObjectPostUser: IRequests = {
    url: BASE_URL + "/api/user",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
  return ObjectPostUser;
};

export const PHOTO_POST = (formData:FormData, token:string) => {
  const ObjectPhotoPost: IRequests = {
      url: BASE_URL + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },

      body: formData,
    },
  }
  return ObjectPhotoPost;
};

export const GET_PHOTOS = ({ page, total, user }: {page:number, total:number, user:IUser}) => {
  return {
    url: `${BASE_URL}/api/photo?_page=${page}&_total=${total}&_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  };
};

export const PHOTO_GET = (id:string) => {
  const ObjectPhotoGet: IRequests = {
     url: `${BASE_URL}/api/photo/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    },
  }
  return ObjectPhotoGet
};

export const COMMENT_POST = (id:string, token:string, comment:string) => {
  const ObjectCommentPost: IRequests = {
      url: `${BASE_URL}/api/comment/${id}`,
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(comment),
    },
  }
  return ObjectCommentPost
};

export const PHOTO_DELETE = (id:string, token:string) => {
  const ObjectPhotoDelete:IRequests = {
      url: `${BASE_URL}/api/photo/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  }
  return ObjectPhotoDelete
};

export const GET_PHOTO = (id:string) => {
  const ObjectGetPhoto: IRequests = {
     url: `${BASE_URL}/api/photo/${id}`,
  }
  return ObjectGetPhoto
};

export const PASSWORD_LOST = (body:FormData) => {
  const ObjectPasswordLost: IRequests = {
     url: `${BASE_URL}/api/password/lost`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    },
  }
  return ObjectPasswordLost
};

export const PASSWORD_RESET = (body:FormData) => {
  const ObjectPasswordReset:IRequests = {
       url: `${BASE_URL}/api/password/reset`,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(body),
    },
  }
  return ObjectPasswordReset
};

export const GET_STATISTICS = (token:string) => {
  const ObjectGetStatistics: IRequests = {
     url: `${BASE_URL}/api/stats`,
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  }
  return ObjectGetStatistics
};
