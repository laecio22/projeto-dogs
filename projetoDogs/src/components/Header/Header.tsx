import { Link } from "react-router-dom";
import { NavHeader, ContainerHeader } from "./style";
import LogoDog from "../../assets/dogs.svg?react";
import img from "../../assets/usuario.svg";

const Header = () => {
  return (
    <ContainerHeader>
      <NavHeader>
        <Link to="/" className="logo" aria-label="logo-dog">
          <LogoDog />
        </Link>
        <img src={img} />
        <Link to="/login" className="login">
          Entrar/Login
        </Link>
      </NavHeader>
    </ContainerHeader>
  );
};

export default Header;
