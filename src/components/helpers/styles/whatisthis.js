import styled from "styled-components";
import styles from "../Theme";

const WrapperStyled = styled.section`
  width: 100%;
  color: ${props => props.gradient ? 'white' : styles.black};
  background-image: ${props => props.gradient ? styles.gradient : 'none'};
`;

export default WrapperStyled;