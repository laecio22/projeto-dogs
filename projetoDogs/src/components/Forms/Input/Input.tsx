import { InputForm, MessageError, ContainerInput, Label } from "./style";

const Input = ({ label, type, onChange, name, value }) => {
  return (
    <ContainerInput >
      <Label htmlFor={name}>{label}</Label>
      <InputForm id={name} type={type} onChange={onChange}></InputForm>
      <MessageError>Error</MessageError>
    </ContainerInput>
  );
};

export default Input;
