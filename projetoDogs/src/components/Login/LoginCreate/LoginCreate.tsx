import { ChangeEvent,  useState } from "react";
const LoginCreate = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleName = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const { value } = currentTarget;
    setName(value);
  };

  const handleEmail = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const { value } = currentTarget;
    setEmail(value);
  };

  const handlePassword = ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
    const { value } = currentTarget;
    setPassword(value);
  };

  const submitUser = (event:React.FormEvent<HTMLFormElement>) => {
     event.preventDefault()
    
  }

  return (
    <section>
      <h2>Formulário</h2>
      <form onSubmit={submitUser}>
        <label>Nome</label>
        <input type="text" value={name} name="name" onChange={handleName} />
        <label>Email</label>
        <input type="email" value={email} name="email" onChange={handleEmail} />
        <label>Senha</label>
        <input
          type="password"
          value={password}
          name="password"
          onChange={handlePassword}
        />
        <button>Salvar</button>
      </form>
    </section>
  );
};

export default LoginCreate;
