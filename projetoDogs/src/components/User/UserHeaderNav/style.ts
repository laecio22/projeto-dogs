import styled from "styled-components";

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
  }

  a:hover, a:focus, button:hover, button:focus {
    background:white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  a.active {
    background:white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }

  a.active svg > * {
    fill: #fb1;
  }
`;
