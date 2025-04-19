import styled from "styled-components";
import imageLogin from "../../assets/login.jpg";

export const SectionRoutesForm = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    content: "";
    display: block;
    background: url(${imageLogin}) no-repeat center center;
    background-size: cover;
  }

  @media screen and (max-width: 50rem) {
    grid-template-columns: 1fr;

    &::before {
      display: none;
    }
  }
`;

export const ContainerRoutesLogin = styled.div`
  max-width: 80rem;
  padding: 2rem;
  margin-top: 15vh;

  @media screen and (max-width: 50rem) {
    max-width: 100%;
  }
`;
