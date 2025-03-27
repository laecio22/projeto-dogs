import styled from "styled-components";
import { scaleUp } from "../../../helper/animationForm";

export const ContainerPhoto = styled.div`
  margin: auto;
  height: 55rem;
  background: white;
  border-radius: 0.6rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: 55rem 30rem;
  grid-template-rows: auto 1fr auto;
  opacity: 0;
  transform: scale(0.8);
  animation: ${scaleUp} 0.3s forwards;

  .comments {
    padding: 0 2rem;
  }

  @media screen and (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh -4rem);
    grid-template-columns: minmax(20rem, 40rem);
    overflow-y: auto;
  }
`;
export const ContainerImg = styled.div`
  grid-row: 1/4;
  @media screen and (max-width: 64rem) {
    grid-row: 1;
  }
`;

export const ContainerDetails = styled.div`
  padding: 2rem 2rem 0 2rem;

  .author {
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .author a:hover {
    text-decoration: underline;
  }

  .visualizacoes::before {
    width: 16px;
    height: 10px;
    display: inline-block;
    content: "";
    margin-right: 0.5rem;
    background-image: url("/visualizacao-black.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

  .attributes {
    display: flex;
    margin-top:1rem;
    margin-bottom:2rem;
    font-size:1.25rem;
    font-weight:bold;
  }

  .attributes li {
      margin-right:1rem;
  }

  .attributes li::before {
    content:'';
    display:inline-block;
    margin-right:0.7rem;
    position: relative;
    top: 3px;
    height: 20px;
    width: 2px;
    background: #333;
  }

  
`;
