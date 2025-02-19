import styled from "styled-components";

export const ButtonForm = styled.button`
  min-width: 16rem;
  font-family: "Poppins";
  padding: 1rem 0.5rem;
  background-color: #0000ff;
  color: #fff;
  box-sizing: border-box;
  border: none;
  border-radius: 0.8rem;
  cursor: pointer;
  outline: none;
  font-size: 1.6rem;
  transition: 0.2s;

  &:hover {
    background-color: #0080ff;
    box-shadow: 0 0 0 3px #00bfff, 0 0 0 4px #00bfff;
  }

  &:focus {
    box-shadow: 0 0 0 3px #00bfff, 0 0 0 4px #00bfff;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
