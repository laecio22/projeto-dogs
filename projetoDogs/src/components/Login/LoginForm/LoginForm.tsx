import { Link } from "react-router-dom";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import useForm from "../../../hooks/useForm";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { TitleForm, SectionLoginForm, Form } from "./style";
import Error from "../../../helper/Error";
import Head from "../../../helper/Head";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  const submitUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <SectionLoginForm>
      <Head title="Login"/>
      <Form onSubmit={submitUser}>
        <TitleForm>Login</TitleForm>
        <Input type="text" name="username" label="Usuário" {...username} />
        <Input type="password" name="password" label="Senha" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        {error && <Error error={error && 'Dados incorretos'} />}
      </Form>
      <Link to={"esqueceu-senha"} className="perdeu">
        Perdeu sua senha?
      </Link>
      <div className="cadastro">
        <h2 className="subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link to={"/login/criar"}>
          <Button>Cadastro</Button>
        </Link>
      </div>
    </SectionLoginForm>
  );
};

export default LoginForm;
