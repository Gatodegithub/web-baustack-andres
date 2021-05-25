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
import shortID from "shortid";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".rectangulo", {
      duration: 4,
      x: -1000,
      y: 500,
      scrollTrigger: ".animate",
    });
  }, []);

  return (
    <Wrapper gradient={true} style={{ marginTop: "5em" }}>
      <Waves.Top />
      <ContainerStyled>
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
              <FigureSpinning>
                <img src={Spinning} alt="" />
              </FigureSpinning>
              <img src={ImportantShape} alt="" />
              <Title.H3 color={"white"} className="animate">
                ¿Cómo <br />
                funciona <br />
                Baustack?
              </Title.H3>
              <TryMeButton to="#">PRUEBA GRATUITA</TryMeButton>
            </div>
          </ActionContainerStyled>
          <DivAnimate>
            {Info.map((el) => (
              <RectangleContainerBox key={shortID.generate()}>
                <RectangleBox>{el}</RectangleBox>
              </RectangleContainerBox>
            ))}
          </DivAnimate>
        </Row>
      </ContainerStyled>
      <Waves.Bottom />
    </Wrapper>
  );
}

const DivAnimate = styled.div`
  ${responsive({
    md: `div:nth-child(2) {
    right: 0px;
  };
  div:nth-child(3) {
    right: 0px;
  };
  div:nth-child(4) {
    right: 0px;
  }`,
  })}
  ${responsive({
    lg: `div:nth-child(2) {
    right: 100px;
  }
  div:nth-child(3) {
    right: 200px;
  }
  div:nth-child(4) {
    right: 100px;
  }`,
  })}
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
    h3 {
      text-align: center;
      line-height: 1.5em;
      margin-bottom: 1em;
      ${responsive({ md: `text-align: left;font-size: 38px;` })}
    }
    & > img {
      position: absolute;
      max-width: 100vw;
      bottom: 0px;
      ${responsive({ md: `bottom: -70%;left: -300px` })}
      ${responsive({ lg: `max-width: 1000px;bottom: -40%;left: -400px` })}
    }
  }
`;

const FigureSpinning = styled.figure`
  position: absolute;
  bottom: 150px;
  left: -100px;
  ${responsive({ md: `left: -160px;` })}
  ${responsive({ lg: `left: -250px;bottom: 80px;` })}
  img {
    @keyframes rotating {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }
    animation: rotating 30s linear infinite;
    max-width: 320px !important;
    ${responsive({ md: `max-width: 500px!important;` })}
    ${responsive({ lg: `max-width: 650px!important;` })}
  }
`;

const RectangleContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50vh;

  /* &:not(:first-child) {
    height: 80vh;
  } */
`;

const RectangleBox = styled.div.attrs((props) => ({
  className: "rectangulo",
}))`
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
  ${responsive({ md: `width: 350px;` })}

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
