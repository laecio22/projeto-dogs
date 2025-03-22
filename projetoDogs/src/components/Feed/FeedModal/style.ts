import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left:0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;

  @media screen  and (max-width:40rem){
    padding: 2rem calc(2rem + 15px) 2rem 2rem;
  }
`;
