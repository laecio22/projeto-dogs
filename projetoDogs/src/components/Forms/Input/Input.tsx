import { InputForm, MessageError, ContainerInput, Label } from "./style";

const Input = ({ label, type, onChange, name, value, error, onBlur }) => {
  return (
    <ContainerInput >
      <Label htmlFor={name}>{label}</Label>
      <InputForm id={name} type={type} onChange={onChange} value={value} onBlur={onBlur}></InputForm>
      {error &&  <MessageError>{error}</MessageError> }
  
    </ContainerInput>
  );
};

export default Input;
