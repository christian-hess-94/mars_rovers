import styled from "styled-components";

export const StyledGridNodeContainer = styled.div<{ hasRover: boolean }>`
  border: 1px solid lightgray;
  position: relative;
  margin: 1em;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ hasRover }) => (hasRover ? "red" : "transparet")};
  transition: ease 100ms;
  :hover {
    padding: 3px;
    border: 3px solid lightblue;
    cursor: crosshair;
  }
`;
export const StyledGridNodeTooltip = styled.div<{ show: boolean }>`
  position: absolute;
  background-color: gray;
  left: 10;
  top: 10;
  opacity: ${({ show }) => (show ? 0.8 : 0)};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  pointer-events: none;
`;
