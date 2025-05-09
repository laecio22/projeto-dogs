import styled from "styled-components";
import { animation } from "../../../helper/animationForm";

export const SectionGraph = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;
animation: ${animation} 0.3s forwards;

@media screen and (max-width:40rem) {
     grid-template-columns: 1fr;
     margin-bottom:2rem;
    

  }
`

export  const GraphItem =  styled.div`
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  border-radius: 0.2rem ;
  display: grid;
  align-items:center;

  &.total {
    grid-column: 1/3;
    padding: 2rem;
    font-size: 2.5rem;
    @media screen and (max-width:40rem) {
    grid-column: 1;

  }


  }

 
`