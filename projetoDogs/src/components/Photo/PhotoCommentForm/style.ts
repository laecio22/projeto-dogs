import styled from "styled-components";
import { latir } from "../../../helper/animationForm";

export  const FormCommentPhoto =  styled.form`
   display: grid;
   grid-template-columns: 1fr  auto;
   margin: 1.5rem;

   textarea {
    display:block;
    width: 100%;
    background: #eee;
    resize:none;
    border: 1px solid #eee;
    border-radius: 0.4rem;
    font-size:1.6rem;
    padding: 0.5rem;
    transition:0.2s;
   }

   textarea:focus, textarea:hover {
       outline: none;
       border-color:#fb1;
       box-shadow: 0 0 0 3px #fea;
       background: white;
   }

   button {
    border: none;
    font-size:1rem;
    padding: 0 1rem;
    color: #333;
    background:transparent;
    cursor: pointer;
    overflow:hidden;
   }

   button:hover, button:focus {
    outline: none;
   }

   button:hover svg path, button:focus svg path{
       fill: #fea;
       stroke:#fb1;
   } 

   button:hover svg g, button:focus svg g {
      animation: ${latir} 0.6s infinite;
   }

`