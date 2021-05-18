import styled from "styled-components";

const ContainerStyled = styled.section`
  width: 100%;
  margin: auto;
  max-width: 1360px;
  padding: 0 16px;

  ${(props) =>
    props.grid
      ? `
      display: grid;
      grid-template-columns: ${props.grid};
    `
      : ""}
`;

export default ContainerStyled;
