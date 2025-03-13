import styled from "styled-components";

export const MobileButton = styled.button`
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
  padding: 0px;

  &::after {
    content: "";
    display: block;
    width: 1.4rem;
    height: 2px;
    background: currentColor;
    border-radius: 2px;
    box-shadow: 0 6px currentColor , 0 -6px currentColor;
    transition:0.2s;
  };

  &:hover, &:focus, &.menuMobileActive {
    outline: none;
    background:white;
    box-shadow: 0 0 0 3px #fea;
    color: #fb1;
    border-radius:#fb1;
  }

  &.menuMobileActive::after {
    transform: rotate(-90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor , 0 -8px currentColor;

  } 
`;

export const Nav = styled.nav`
&.nav {
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

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
    
  }

  a.active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }

  a.active svg > * {
    fill: #fb1;
  }
}

&.navMobile {
  display: block;
  position: absolute;
  top: 60px;
  right: 0;
  margin: 0 ;
  background:white;
  box-shadow: 0 1px  2px rgba(0 ,0 ,0 ,0.2);
  border-radius: 0.4rem;
  transform:translateX(-10px);
  opacity: 0;
  pointer-events:none;

  a, button {
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    background: none;
    border: 1px  solid #eee;
    cursor: pointer;
    padding:  0.8rem 1rem;

  }

  a:hover svg > * , button:hover svg > * {
    fill: #fb1;
  }

  button {
    border-bottom:none
  }

  svg {
    margin-right:0.6rem
  }
}

&.navMobileActive {
  transition: 0.3s;
  transform: initial;
  z-index: 100;
  opacity: 1;
  pointer-events:initial;
}
  
`;
