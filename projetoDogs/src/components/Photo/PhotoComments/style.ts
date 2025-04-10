import styled from "styled-components";

export const ListComments = styled.ul`
  padding: 0 2rem;
  overflow-y: auto;
  word-break: break-word;

  &.single {
    padding: 0px;
  }

  li {
    line-height: 1.25;
    margin-bottom: 0.5rem;
  }
`;
