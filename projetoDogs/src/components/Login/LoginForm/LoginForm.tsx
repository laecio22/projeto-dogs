import { Link } from "react-router-dom";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import useForm from "../../../hooks/useForm";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = useContext(UserContext);  

  const submitUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <section>
      <form onSubmit={submitUser}>
        <h2>Login</h2>
        <Input type="text" name="username" label="Usuário" {...username} />
        <Input type="password" name="password" label="Senha" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to={"/login/criar"}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
