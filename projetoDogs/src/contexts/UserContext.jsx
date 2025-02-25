import { createContext, useEffect, useState } from "react";
import api from "axios";
import { TOKEN_CREATE, GET_USER, TOKEN_VALIDATE } from "../api/URL";
export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [dataUser, setDataUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          const { url, options } = TOKEN_VALIDATE(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          const json = await response.json();
        } catch (error) {
          console.log(error, "erro");
        } finally {
        }
      }
    };

    autoLogin();
  }, []);

  const userLogin = async (username, password) => {
    
    try {
      const { url, options } = TOKEN_CREATE({
        username,
        password,
      });
      const tokenRes = await fetch(url, options);
      console.log(response, "criar");
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      getUser(token);
    } catch (error) {
      console.log(error, "eerro ");
    }
  };

  const getUser = async (token) => {
    try {
      const { url, options } = GET_USER(token);
      const response = await fetch(url, options);
      const json = await response.json()      
      setDataUser(json);
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
