import { styled } from "styled-components";
import { animation } from "../../../helper/animationForm";

export const SectionLoginForm = styled.section`
  animation: ${animation} 0.3s forwards;
  .perdeu {
    color: #778888;
    padding: 1rem 0;
    display: inline-block;
  }

  .perdeu::after {
    content: "";
    width: 100%;
    background: currentColor;
    display: block;
    height: 0.2rem;
   
    }

  .subtitle {
    margin-top: 1rem;
    font-size:3rem;
  }

  .subtitle::after {
    content:'';
    display: block;
    width: 8rem;
    height: 0.8rem;
    background: #ddd;
  }

  .cadastro {
    margin-top: 2rem;
  }

  .cadastro p {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;

export const Form = styled.form`
  margin-bottom: 4rem;
`;
export const TitleForm = styled.h2`
  font-size: 4rem;
  font-family: "Roboto";
  position: relative;
  margin-bottom: 1.2rem;
  z-index: 1;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background-color: #933;
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;
