import { Link } from "react-router-dom";
import { NavHeader } from "./style";

const Header = () => {
  return (
    <div>
      <NavHeader>
        <Link to='/'>Home</Link>
        <Link to='/login'>Entrar/Login</Link>
      </NavHeader>
    </div>
  );
};

export default Header;
