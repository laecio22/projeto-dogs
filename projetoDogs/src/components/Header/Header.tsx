import { Link } from "react-router-dom";
import { NavHeader, ContainerHeader } from "./style";
import LogoDog from "../../assets/dogs.svg?react";
import imgUser from "../../assets/usuario.svg";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const Header = () => {
  const { dataUser } = useContext(UserContext);

  return (
    <ContainerHeader>
      <NavHeader className="container">
        <Link to="/" className="logo" aria-label="logo-dog">
          <LogoDog />
        </Link>
        {dataUser ? (
          <div>
            <Link to="/conta" className="login">
              {dataUser.nome}
            </Link>
            <img src={imgUser} alt="logo-usuário" />
          </div>
        ) : (
          <div>
            <Link to="/login" className="login">
              Entrar/Login
            </Link>
            <img src={imgUser} alt="logo-usuário" />
          </div>
        )}
      </NavHeader>
    </ContainerHeader>
  );
};

export default Header;
