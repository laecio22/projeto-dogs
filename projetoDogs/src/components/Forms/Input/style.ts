import styled from "styled-components";

export const ContainerInput = styled.div`
  margin-bottom: 1rem;
`;
export const Label = styled.label`
  font-size: 1.6rem;
  padding-bottom: 0.8rem;
  display: block;
`;
export const InputForm = styled.input`
  width: 100%;
  border: 2px solid #eee;
  background-color: #eee;
  border-radius: 0.8rem;
  display: block;
  font-size: 1.6rem;
  padding: 1.4rem;
  transition: 0.2s;

  &:hover {
    background-color: white;
    outline: none;
    border-color: #0000ff;
  }

  &:focus {
    background-color: white;
    outline: none;
    border-color: #0000ff;
  }
`;

export const MessageError = styled.p`
  color: #ff0000;
  font-size: 1.4rem;
`;
