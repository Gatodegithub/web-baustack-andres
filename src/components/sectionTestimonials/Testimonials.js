import React from "react";
import styled from "styled-components";
import { Row, Title, Wrapper } from "../helpers";
import ContainerStyled from "../helpers/styles/ContainerStyled";
import responsive from "../helpers/responsive";
import Slider from "./Slider";

function Testimonials() {

  return (
    <Wrapper>
      <ContainerStyled>
        <Row
          css={{
            default: `display: grid;grid-template-rows: max-content 1fr;`,
          }}
        >
          <TextContainer>
            <Title.H2>
              Nuestros clientes resuelven sus problemas operativos con Baustack
            </Title.H2>
          </TextContainer>
          <Slider />
        </Row>
      </ContainerStyled>
    </Wrapper>
  );
}

export const TextContainer = styled.div`
  text-align: center;
  margin: 3em 0 5em;
  ${responsive({ md: `margin: 3em auto 5em;max-width: 550px;` })}
`;

export default Testimonials;
