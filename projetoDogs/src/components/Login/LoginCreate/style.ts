import styled, {keyframes} from "styled-components";

const animation = keyframes`
 from {
       opacity: 0;
       transform: translateX(-20px);
   }

   to {
    opacity: 1;
    transform: initial;
   }
`

export const SectionFormCreate = styled.section`
   animation: ${animation} 0.3s forwards;
`

export const FormCreateUser = styled.form `
`