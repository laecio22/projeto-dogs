import { ChangeEvent, useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido, preencha um email válido",
  },

  password: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/,
    message: 'Senha inválida, deve conter 1 letra maiúscula, 1 minúscula, 1 dígito,  1 caracter especial e ter no  minimo  tamanho 8'
  }
};

const useForm = (type?: string | boolean) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string) => {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor");     
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
   if (error) validate(target.value);
    setValue(target.value);
  };

  return {
    value,
    setValue,
    onChange,
    error,
    validate : ()=> validate(value),
    onBlur: () => validate(value)
  };
};

export default useForm;
