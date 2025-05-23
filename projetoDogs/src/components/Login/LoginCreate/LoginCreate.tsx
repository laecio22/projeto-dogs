import { SectionFormCreate, FormCreateUser } from "./style";
import { TitleForm } from "../LoginForm/style";
import useForm from "../../../hooks/useForm";
import Input from "../../Forms/Input/Input";
import { ButtonForm } from "../../Forms/Button/style";
import { USER_POST } from "../../../api/URL.js";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import useRequest from "../../../hooks/useRequest.js";
import Error from "../../../helper/Error.js";
import Head from "../../../helper/Head.js";

const LoginCreate = () => {
  const username = useForm();
  const email = useForm("email");
  const password = useForm("password");
  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useRequest();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      password: password.value,
      email: email.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
    console.log(response, "res");
  };

  return (
    <SectionFormCreate>
      <Head title="Crie  sua  conta" />
      <TitleForm>Cadastre-se</TitleForm>
      <FormCreateUser onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <ButtonForm disabled>Carregando....</ButtonForm>
        ) : (
          <ButtonForm>Cadastrar</ButtonForm>
        )}
        <Error error={error} />
      </FormCreateUser>
    </SectionFormCreate>
  );
};

export default LoginCreate;
