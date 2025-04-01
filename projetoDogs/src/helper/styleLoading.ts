import styled from "styled-components";

export const ContainerLoading = styled.div`
   height:100vh;
   width: 100%;
   position: absolute;
   top: 0;
   left: 0;
   display: flex;
   z-index: 1000;
`

export  const CircleLoading = styled.div`
margin: auto;
display: flex;
justify-content: center;
align-items: center;
height: 80px;
width: 80px;
border-radius: 50%;
padding-left: 5px;
background:rgba(255,255,255,0.5);

`