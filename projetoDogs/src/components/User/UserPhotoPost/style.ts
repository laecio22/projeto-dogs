import styled from "styled-components";
import { animation } from "../../../helper/animationForm";

export const SectionFormPostFoto = styled.section`
  animation: ${animation} 0.3s forwards;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width:40rem) {
    grid-template-columns: 1fr;
  }  

  input {
    margin-bottom: 3rem;
  }

  #img {
    margin-bottom: 1rem;
  }
`;

export const ContainerPreviewImg = styled.div`
  background-size: cover;
  background-position: center center;
  border-radius: 1rem;

  ::after {
    content: "";
    display: block;
    height: 0;
    padding-bottom: 100%;
  }
`;
