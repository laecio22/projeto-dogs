import { createContext, useState } from "react";
import api from "axios";
import { TOKEN_CREATE, GET_USER } from "../api/URL";
export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [dataUser, setDataUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(null);

  const userLogin = async (username, password) => {
    const {url, headers, body} = TOKEN_CREATE({
      username,
      password,
    });

    try {   
      const response = await api.post(url, body, {
        headers,
      });
      window.localStorage.setItem("token", response.data.token);
      getUser(response.data.token);
    } catch (error) {
      console.log(error, "eerro ");
    }
  };

  const getUser = async (token) => {
    try {
      const { url, headers } = GET_USER(token);
      const response = await api.get(url, {
        headers,
      });
      console.log(response);
      setDataUser(response.data);
      setLogin(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{ userLogin, dataUser }}>
      {children}
    </UserContext.Provider>
  );
};
