import React from "react";
import styled from "styled-components";
import Waves from "../helpers/Waves";
import { Row, Wrapper, Title } from "../helpers";
import Spinning from "../../images/spinning.png";
import ImportantShape from "../../images/important-shape.png";
import ContainerStyled from "../helpers/styles/ContainerStyled";
import TryMeButton from "../header/TryMeButton";
import { Idea, Database, CodeFile, Gauge, Edit } from "../helpers/JSSVG/";
import responsive from "../helpers/responsive";

export default function SectionWhatWeDo() {
  const Info = [
    [
      <Idea />,
      <p>
        Cuéntanos tu proceso de <br />
        negocio
      </p>,
    ],
    [
      <CodeFile />,
      <p>
        Co-creamos
        <br /> aplicaciones en minutos <br />
        utilizando la tecnología <br />
        “No Code”
      </p>,
    ],
    [
      <Database />,
      <p>
        Crea y controla bases de <br />
        datos sin código
      </p>,
    ],
    [<Gauge />, <p>Construye indicadores</p>],
    [<Edit />, <p>Filtra, ordena, asigna</p>],
  ];

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
              <Title.H2 color={"white"}>
                ¿Cómo <br />
                funciona <br />
                Baustack?
              </Title.H2>
              <TryMeButton to="#">PRUEBA GRATUITA</TryMeButton>
            </div>
          </ActionContainerStyled>
          <div>
            {Info.map((el, idx) => (
              <RectangleContainerBox key={idx}>
                <RectangleBox>{el}</RectangleBox>
              </RectangleContainerBox>
            ))}
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
      lg: `max-width: 650px;height:700px;bottom: -400px;left:-100px;`,
    })}
  }
`;

const ActionContainerStyled = styled.div`
  margin-top: 5em;
  margin-bottom: 15em;
  position: sticky;
  top: 70px;
  z-index: 10;
  ${responsive({ md: `position:static;margin-top: 10em;margin-bottom: 8em` })}

  & > div {
    ${responsive({ md: `position: sticky;top: 200px;` })}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${responsive({ md: `align-items: flex-start;margin-left: 4em;` })}
    h2 {
      text-align: center;
      line-height: 1.5em;
      margin-bottom: 1em;
      ${responsive({ md: `text-align: left;font-size: 38px;` })}
    }
    img {
      position: absolute;
      max-width: 100vw;
      bottom: -30px;
      ${responsive({ md: `bottom: -70%;left: -300px` })}
      ${responsive({ lg: `max-width: 1000px;bottom: -30%;left: -300px` })}
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
  align-items: center;
  text-align: left;
  padding: 20px 0px;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.25);
  border-radius: 32px;
  height: max-content;
  font-weight: bold;
  font-size: 18px;
  ${responsive({md: `width: 350px;`})}

  & svg {
    max-width: 50px;
    max-height: 50px;
    margin-left: 15px;
  }

  & p {
    margin: 0 15px 0 35px;
    line-height: 1.2em;
  }
`;
