import styled from "styled-components";
import responsive from "../responsive";

const ContainerStyled = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1360px;
  padding: 0 16px;
  ${responsive({lg: `padding: 0 52px;`})}

  /* ${(props) =>
    props.grid
      ? `
      display: grid;
      grid-template-columns: ${props.grid};
    `
      : ""} */
`;

export default ContainerStyled;
