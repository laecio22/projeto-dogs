import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/login'>Entrar/Login</Link>
      </nav>
    </div>
  );
};

export default Header;
