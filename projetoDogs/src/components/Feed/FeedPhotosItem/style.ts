import styled from "styled-components";
import img from '../../../assets/visualizacao.svg'

export const ItemPhoto =  styled.li`
&:nth-child(2){
    grid-column: 2/4;
    grid-row:span 2
}

@media screen and (max-width:40rem){
    &:nth-child(2){
    grid-column: initial;
    grid-row:initial
}
}

display: grid;
cursor: pointer;
overflow:hidden;
border-radius:0.6rem;

img, span {
    grid-area:1/1;
}

span {
    background: rgb(0, 0, 0,0.3);
    color: white;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    display:none;
}

span::before {
    content: '';
    display:inline-block;
    width:16px;
    height: 16px;
    margin-right:0.25rem;    
    background:url(${img}) no-repeat;
   
}

&:hover span {
   display:flex;
}
`