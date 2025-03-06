import { createContext, useCallback, useEffect, useState } from "react";
import { TOKEN_CREATE, GET_USER, TOKEN_VALIDATE } from "../api/URL";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [dataUser, setDataUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const userLogout = useCallback(async()=>{
    setDataUser(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
    navigate("/login");
  }, [])
  
  

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (error) {
          console.log(error, "erro");
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false)
      }
    };

    autoLogin();
  }, [userLogout]);

  const userLogin = async (username, password) => {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_CREATE({
        username,
        password,
      });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(` Usuário inválido`);
      const { token } = await tokenRes.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

 

  const getUser = async (token) => {
    try {
      const { url, options } = GET_USER(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setDataUser(json);
      setLogin(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider
      value={{ userLogin, dataUser, userLogout, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
