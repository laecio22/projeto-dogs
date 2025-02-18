import { Link } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import api from "axios";
import BASE_URL from "../../../api/URL";

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
        <label>Nome</label>
        <input type="text" value={name} name="name" onChange={handleName} />
        <label>Senha</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={handlePassword}
        />
        <button>Entrar</button>
      </form>
      <Link to={"/login/criar"}>Cadastro</Link>
    </section>
  );
};

export default LoginForm;
