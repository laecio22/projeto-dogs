import { Link } from "react-router-dom";
const LoginForm = () => {
  return <div>
    formulário Login
    <Link to={'/login/criar'}>Cadastro</Link>
    </div>;
};

export default LoginForm;
