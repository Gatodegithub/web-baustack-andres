import React from "react";
import styled from "styled-components";
import Row from "../helpers/Row";
import Wrapper from "../helpers/Wrapper";
import Waves from "../helpers/Waves";
import Text from "../helpers/Text";
import ContainerStyled from "../helpers/styles/ContainerStyled";
import TryMeButton from "./TryMeButton";
import Instagram from "../helpers/JSSVG/Instagram";
import Facebook from "../helpers/JSSVG/Facebook";
import responsive from "../helpers/responsive";

export default function Footer() {
  return (
    <Wrapper gradient>
      <Waves.Top />
      <ContainerStyled>
        <Row
          css={{
            default: `display:grid;grid-template-rows: 230px 150px;`,
            md: `grid-template-rows: none;grid-template-columns: 1fr 1fr;padding: 6em 0em 8em;`,
          }}
        >
          <TextContainer>
            <Text.H2>
              Baustack<sup>®</sup>
            </Text.H2>
            <Text.P>
              Desarrollamos herramientas <br />
              No-Code para PYMES. <br />
              Encuentranos en redes sociales
            </Text.P>
            <List>
              <li>
                <Instagram />
              </li>
              <li>
                <Facebook />
              </li>
            </List>
          </TextContainer>
          <ButtonContainer>
            <TryMeButton>PRUEBA GRATUITA</TryMeButton>
          </ButtonContainer>
        </Row>
      </ContainerStyled>
    </Wrapper>
  );
}

const TextContainer = styled.div`
  ${responsive({ md: `margin-left: 4em;` })}
  h2 {
    margin: 1em 0 0.5em;
    font-size: 38px;
    color: white;
  }
  p {
    line-height: 1.3em;
    color: white;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  ${responsive({
    md: `align-items: flex-end;margin-bottom: 3em;justify-content: center;margin-right: 4em;`,
  })}
`;

const List = styled.ul`
  display: flex;
  margin-top: 1.5em;

  li:not(:last-child) {
    margin-right: 1em;
  }
  svg {
    width: 36px;
  }
`;
