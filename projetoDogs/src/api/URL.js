  
  const BASE_URL = 'https://dogsapi.origamid.dev/json';
  
  export const TOKEN_CREATE = (body) =>{
    return {
      url: BASE_URL + '/jwt-auth/v1/token',
      headers:{
        'Content-Type': 'application/json'
      },
      body
    } 
  }

  export const GET_USER = (token) =>{
    return {
      url: BASE_URL + '/api/user',
      headers:{
        'Authorization': 'Bearer ' + token
      }
    } 
  }