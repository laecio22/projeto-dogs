import styled from "styled-components";
import { skeleton } from "./animationForm";

export const WrapperImage = styled.div`
   display:grid;

   img {
      grid-area: 1/1;
      opacity: 0;
      transition: 0.2s;
   }
`
export  const ContainerSkeleton =  styled.div`
    grid-area:1/1;
    height:100%;
    background-image:linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: ${skeleton} 1.5s infinite linear;
`  