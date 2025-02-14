import styled from "styled-components";

export const ContainerHeader = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 0 2rem;
  position: fixed;
  z-index: 100;
  top: 0;
`;

export const NavHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 50px;
  align-items: center;

  .login {
    color: #333;
  }

  .login::before {
    content: "";
    display: inline-block;
    width: 30px;
    height: 40px;
    background: url("../../assets/usuario.svg") no-repeat center center;
    background-color: #843;
  }
`;
