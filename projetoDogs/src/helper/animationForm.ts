import { keyframes } from "styled-components";
export const animation = keyframes`
 from {
       opacity: 0;
       transform: translateX(-20px);
   }

   to {
    opacity: 1;
    transform: initial;
   }
`

export const scaleUp =  keyframes`
 to {
    transform: initial;
    opacity:  initial;
 }
`

export const latir =  keyframes`
from {
   opacity: 0;
}

to {
   opacity: 1;
}
`

export  const  skeleton = keyframes`
   from {
      background-position: 0px
   }

   to {
      background-position: -200%;
   }
`