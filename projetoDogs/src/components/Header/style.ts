import styled from "styled-components";

export const ContainerHeader = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 0 2rem;
  position: fixed;
  z-index: 2000;
  top: 0;
  background:white;
`;

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  align-items: center;

  div {
    display: flex;
    gap: 1rem;
  }

  .login {
    color: #333;
  }
`;
