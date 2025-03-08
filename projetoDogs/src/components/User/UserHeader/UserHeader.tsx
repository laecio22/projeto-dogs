import { useEffect, useState } from "react";
import { TitleForm as Title } from "../../Login/LoginForm/style";
import UserHeaderNav from "../UserHeaderNav/UserHeaderNav";
import { Header } from "./style";
import { useLocation } from "react-router-dom";
const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();
  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;

      default:
        setTitle("Minha Conta");
        break;
    }
  }, [location]);
  return (
    <Header>
      <Title>{title}</Title>
      <UserHeaderNav />
    </Header>
  );
};

export default UserHeader;
