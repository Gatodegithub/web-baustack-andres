import styled from "styled-components";
import responsive from "../responsive";

const ContainerStyled = styled.section`
  padding: 0 16px;
  ${responsive({lg: `padding: 0 52px;`})}
`;

export default ContainerStyled;
