import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import api from "axios";
import BASE_URL from "../../../api/URL";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleName = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const { value } = currentTarget;
    setName(value);
  };

  const handlePassword = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const { value } = currentTarget;
    setPassword(value);
  };
  const submitUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = {
      username: name,
      password,
    };

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
  };

  return (
    <section>
      <form onSubmit={submitUser}>
        <h2>Login</h2>
        <Input
          type="text"
          name="username"
          onChange={handleName}
          value={name}
          label="Usuário"
        />
        <Input
          type="password"
          name="password"
          onChange={handlePassword}
          value={password}
          label="Senha"
        />      
        <Button>Entrar</Button>
      </form>
      <Link to={"/login/criar"}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
