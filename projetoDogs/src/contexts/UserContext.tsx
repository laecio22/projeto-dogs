import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { TOKEN_CREATE, GET_USER, TOKEN_VALIDATE } from "../api/URL";
import { useNavigate } from "react-router-dom";
import { IDataUser } from "../types/IDataUser";

type UserContextType = {
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => Promise<void>;
  dataUser: IDataUser | null; 
  error: string | null | Error;
  loading: boolean;
  login: boolean | null;   
}

export const UserContext = createContext({} as UserContextType);

export const UserStorage = ({ children }: { children: ReactNode }) => {
  const [dataUser, setDataUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null | Error>(null);

  const navigate = useNavigate();

  const userLogout = useCallback(async () => {
    setDataUser(null);
    setError(null);
    setLoading(false);
    setLogin(false);
    window.localStorage.removeItem("token");
  }, []);

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
        setLogin(false);
      }
    };

    autoLogin();
  }, [userLogout]);

  const userLogin = async (username: string, password: string) => {
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
       if (error instanceof Error) {
        setError(error?.message);
      } else {
        setError("Ocorreu um erro desconhecido.");
      }     
      setLogin(false);
    } finally {
      setLoading(false);
    }
  };

  const getUser = async (token: string) => {
    try {
      const { url, options } = GET_USER(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setDataUser(json);
      console.log(json)
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
