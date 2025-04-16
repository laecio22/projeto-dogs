import { useEffect, useState } from "react";
import useForm from "../../../hooks/useForm";
import useRequest from "../../../hooks/useRequest";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import { TitleForm } from "../LoginForm/style";
import { PASSWORD_RESET } from "../../../api/URL";
import Error from "../../../helper/Error";
import { useNavigate } from "react-router-dom";
import Head from "../../../helper/Head";

const LoginResetPassword = () => {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");

  const password = useForm();
  const { loading, error, request } = useRequest();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response?.ok) navigate("/login");
    }
  };

  return (
    <section>
      <Head title="Resetar  Senha" />
      <TitleForm>Recuperação de Senha</TitleForm>
      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          name="password"
          label="Nova  Senha"
          {...password}
        />
        {loading ? (
          <Button disabled>Enviando ...</Button>
        ) : (
          <Button>Resetar Senha</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginResetPassword;
