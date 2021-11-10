import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1em;
  margin: 0em 2em 0em 2em;
  background-color: #282c34;
  border: 2px solid white;
  color: white;
  font-weight: bold;
  transition: 100ms ease;
  cursor: pointer;
  :hover:active {
    background-color: white;
    color: #282c34;
    cursor: pointer;
  }
  :disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;
