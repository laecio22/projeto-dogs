import styled from "styled-components";

export  const  ButtonDelete = styled.button`
  background: #ddd;
  border-radius:0.4rem;
  cursor: pointer;
  padding: 0.6rem 0.8rem;
  border: 1px solid transparent;
  font-size:1.6rem;
  transition: 0.1s;

  &:hover, &:focus {
    background:white;
    box-shadow:0 0 0 3px #eee;
    border-color:#333;
  }
`