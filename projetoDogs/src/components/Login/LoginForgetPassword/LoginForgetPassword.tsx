import useForm from "../../../hooks/useForm";
import useRequest from "../../../hooks/useRequest";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import { TitleForm } from "../LoginForm/style";
import { PASSWORD_LOST } from "../../../api/URL";
import Error from "../../../helper/Error";
import Head from "../../../helper/Head";

const LoginForgetPassword = () => {
  const login = useForm();
  const { data, error, loading, request } = useRequest();
  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("esqueceu-senha", "resetar-senha"),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  };
  return (
    <section>
      <Head title="Perdeu  a  Senha" />
      <TitleForm>Perdeu sua senha?</TitleForm>
      {data ? (
        <p style={{ color: "#4c1" }}>Email enviado</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" name="login" {...login} type="text" />
          {loading ? (
            <Button disabled>Enviando ....</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
          <Error error={error} />
        </form>
      )}
    </section>
  );
};

export default LoginForgetPassword;
