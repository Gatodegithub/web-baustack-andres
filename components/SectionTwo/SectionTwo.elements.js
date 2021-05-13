import { Container } from "../src/globalStyles";
import styled from "styled-components";

// Como hago para adaptar el background image al tamaño del contenedor ??
export const ContainerImg = styled.section`
  margin-top: 300px;
  height: 100vh;
  position: relative;
  /* @media (max-width: 900px){
    overflow-x: hidden; 
  } */
`;

export const Imgs = styled.img`
  width: 100%;
  height: 200%;
  position: absolute;
  z-index: -100;
  top: -300px;
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
  }
`;

export const TextContainer = styled.div`
  position: sticky;
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colorWhite};
  padding-right: 66px;
  /* position: relative; */
  line-height: 65px;
  z-index: 100;

  &::before {
    content: url("/aro.svg");
    position: absolute;
    bottom: 0;
    z-index: -2;
  }

  &::after {
    content: url("/degrade.svg");
    position: absolute;
    left: -70px;
    top: -300px;
    z-index: -1;
  }

  & button {
    margin-top: 30px;
  }
  @media (max-width: 960px) {
    &::before {
      content: none;
    }

    &::after {
      content: none;
    }
  }
`;
