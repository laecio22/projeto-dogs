import { Link } from "react-router-dom";
import { NavHeader, ContainerHeader } from "./style";
import LogoDog from "../../assets/dogs.svg?react";
import imgUser from "../../assets/usuario.svg";

const Header = () => {
  return (
    <ContainerHeader>
      <NavHeader>
        <Link to="/" className="logo" aria-label="logo-dog">
          <LogoDog />
        </Link>
        <div>
          <Link to="/login" className="login">
            Entrar/Login
          </Link>
          <img src={imgUser} alt="logo-usuário" />
        </div>
      </NavHeader>
    </ContainerHeader>
  );
};

export default Header;
