import React from "react";
import styled from "styled-components";
import Waves from "../helpers/Waves";
import { Row, Wrapper, Title } from "../helpers";
import Spinning from "../../images/spinning.png";
import ImportantShape from "../../images/important-shape.png";
import ContainerStyled from "../helpers/styles/ContainerStyled";
import TryMeButton from "../header/TryMeButton";
import Idea from "../helpers/JSSVG/Idea";
import responsive from "../helpers/responsive";

export default function SectionWhatWeDo() {
  return (
    <Wrapper gradient={true} style={{ marginTop: "5em" }}>
      <Waves.Top />
      <ContainerStyled>
        <FigureSpinning>
          <img src={Spinning} alt="" />
        </FigureSpinning>
        <Row
          css={{
            default: `
          display: grid;
          grid-template-rows: 200px 1fr;
        `,
            md: `grid-template-columns: 1fr 1fr;grid-template-rows: none;`,
          }}
        >
          <ActionContainerStyled>
            <div>
              <img src={ImportantShape} alt="" />
              <Title.H2 color={"white"}>¿Cómo funciona Baustack?</Title.H2>
              <TryMeButton to={"#"}>PRUEBA GRATUITA</TryMeButton>
            </div>
          </ActionContainerStyled>
          <div>
            <RectangleContainerBox>
              <RectangleBox>
                <Idea />
                <p>
                  Co-creamos
                  <br /> aplicaciones en minutos
                  <br /> utilizando la tecnología <br />
                  “No Code”
                </p>
              </RectangleBox>
            </RectangleContainerBox>
            <RectangleContainerBox>
              <RectangleBox>
                <Idea />
                <p>Co-creamos</p>
              </RectangleBox>
            </RectangleContainerBox>
            <RectangleContainerBox>
              <RectangleBox>
                <Idea />
                <p>Co-creamos</p>
              </RectangleBox>
            </RectangleContainerBox>
          </div>
        </Row>
      </ContainerStyled>
      <Waves.Bottom />
    </Wrapper>
  );
}

const FigureSpinning = styled.figure`
  img {
    position: absolute;
    bottom: -100px;
    max-width: 270px;
    ${responsive({
      lg: `max-width: 650px;height:700px;bottom: -300px;left:-100px;`,
    })}
  }
`;

const ActionContainerStyled = styled.div`
  margin-top: 5em;
  position: sticky;
  top: 100px;
  z-index: 10;
  ${responsive({ md: `position:static;margin-top: 15em;` })}

  & > div {
    ${responsive({ md: `position: sticky;top: 200px;` })}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      text-align: center;
      margin-bottom: 1em;
    }
    img {
      position: absolute;
      max-width: 100vw;
      bottom: -30px;
      @media screen and (min-width: 430px) and (max-width: 768px) {
        bottom: -100px;
      }
      ${responsive({ md: `bottom: -170%;` })}
      ${responsive({ lg: `width: 70vw;bottom: -300%;` })}
    }
  }
`;

const RectangleContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50vh;

  &:not(:first-child) {
    height: 80vh;
  }
`;

const RectangleBox = styled.div`
  background-color: #3a0ca3;
  color: white;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 20px 0px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  height: max-content;
  font-weight: bold;
  font-size: 18px;

  & svg {
    min-width: 72px;
    min-height: 72px;
    margin-left: 15px;
  }

  & p {
    margin: 0 15px 0 35px;
  }
`;
