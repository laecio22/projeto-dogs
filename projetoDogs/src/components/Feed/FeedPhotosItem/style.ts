import styled from "styled-components";

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

& > div {
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
    grid-area:1/1;
}

span::before {
    content: '';
    display:inline-block;
    width:16px;
    height: 16px;
    margin-right:0.25rem;    
     background-image: url('/visualizacao.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
   
}

&:hover span {
   display:flex;
}
`