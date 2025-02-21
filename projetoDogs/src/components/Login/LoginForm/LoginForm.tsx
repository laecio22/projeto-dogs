import { Link } from "react-router-dom";
import api from "axios";
import Button from "../../Forms/Button/Button";
import Input from "../../Forms/Input/Input";
import useForm from "../../../hooks/useForm";
import { TOKEN_CREATE, GET_USER } from "../../../api/URL.js";
import { useEffect } from "react";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  useEffect(()=>{
    const tokenUser = window.localStorage.getItem('token');
    if (tokenUser) {
      getUser(tokenUser)
    }
  }, [])

  const  getUser = async(token:string) => {
    try {
     const{url, headers } = GET_USER(token)
       const response =  await api.get(url, {
        headers
       })
      console.log(response, 'outra')
    } catch (error) {
      console.log(error, 'erro')
    }
  }

  const submitUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { url, headers, body } = TOKEN_CREATE({
      username: username.value,
      password: password.value,
    });

    if (username.validate() && password.validate()) {
      try {
        const response = await api.post(`${url}`, body, {
          headers,
        });
        
        window.localStorage.setItem('token', response.data.token)
        getUser(response.data.token)
       
      } catch (error) {
        console.log(error, 'erro')
      }
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
