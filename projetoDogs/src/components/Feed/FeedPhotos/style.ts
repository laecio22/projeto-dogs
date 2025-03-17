import styled from "styled-components";
import { animation } from "../../../helper/animationForm";

export const ContainerListPhotos = styled.ul`
  animation: ${animation} 0.3s forwards;
  display: grid;
  grid-template-columns: repeat(3 ,1fr);
  gap: 1rem;
  margin-bottom:1rem;
  justify-items:center;

  @media screen and (max-width:40rem){
     grid-template-columns:repeat(2, 1fr)
  }
`;
