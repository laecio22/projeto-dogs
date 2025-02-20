import { Link } from "react-router-dom";
import api from "axios";
import BASE_URL from "../../../api/URL";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import useForm from "../../../hooks/useForm";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const submitUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = {
      username:username.value,
      password: password.value,
    };

    if (username.validate() && password.validate()) {
      api
        .post(`${BASE_URL}/jwt-auth/v1/token`, body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response, "resposta");
        })
        .catch((error) => {
          console.log(error, "ocorreu um erro ");
        });
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
