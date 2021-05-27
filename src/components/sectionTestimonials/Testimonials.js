import React, { useState } from "react";
import styled from "styled-components";
import { Row, Theme, Title, Wrapper } from "../helpers";
import ContainerStyled from "../helpers/styles/ContainerStyled";
import PolygonSli from "../../images/Polygon.svg";
import TryMeButton from "./TryMeButton";
import responsive from "../helpers/responsive";
import imgSlider from "../../images/imgSlider.svg";

const data = [
  {
    img: <img src={imgSlider} alt="imgSlider" />,
    // img: require('../../images/imgSlider.svg').default,
    title: "SINTONIZA",
    description:
      "Sintoniza logró crear una bitácora de capacitación con cientos de usuarios en minutos…",
    bg: Theme.darkmauve,
  },
  {
    img: <img src={imgSlider} alt="imgSlider" />,
    title: "segundo titulo",
    description: "segunda descripción",
    bg: Theme.darkmauve + 99,
  },
  {
    img: <img src={imgSlider} alt="imgSlider" />,
    title: "tercer titulo",
    description: "tercera descripción",
    bg: Theme.darkmauve,
  },
];

function Testimonials() {
  const [state, setState] = useState(0);

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
          <Slider state={state}>
            <Polygon
              onClick={() =>
                state === 0 ? setState(data.length - 1) : setState(state - 1)
              }
            >
              <img src={PolygonSli} alt="Polygon slider" />
            </Polygon>
            <Content state={state} anima={'example 2s'}>
              <Figure>{data[state].img}</Figure>
              <FigCaption>
                <Title.H3 color={"white"}>{data[state].title}</Title.H3>
                <Title.P color={"white"}>{data[state].description}</Title.P>
                <TryMeButton to="#">PRUEBA GRATUITA</TryMeButton>
              </FigCaption>
            </Content>
            <Polygon
              onClick={() =>
                state === data.length - 1 ? setState(0) : setState(state + 1)
              }
            >
              <img src={PolygonSli} alt="Polygon slider" />
            </Polygon>
          </Slider>
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

export const Polygon = styled.figure`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 20px;
    ${responsive({ lg: `width: 40px;` })}
  }
`;

export const Figure = styled.figure`
  display: flex;
  img {
    width: 170px;
    ${responsive({ lg: `width: 260px;` })}
  }
`;

export const FigCaption = styled.figcaption`
  text-align: left;
  h3 {
    margin-bottom: 1em;
  }
  p {
    margin-bottom: 1em;
  }
`;

export const Slider = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 50px;
  border-radius: 20px;
  box-shadow: -25px -25px 0px 0px ${Theme.mauve},
    -15px -10px 5px 0px rgba(0, 0, 0, 0.2), 10px 10px 5px 0px rgba(0, 0, 0, 0.2);
  width: 100%;
  transition: background-color 1s;
  background-color: ${({ state }) => data[state].bg};
  height: auto;
  padding: 1em 0;
  ${responsive({ lg: `grid-template-columns: 100px 1fr 100px;` })}

  & > figure:nth-child(3) img {
    transform: rotate(180deg);
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr;
  row-gap: 20px;

  ${responsive({
    md: `grid-template-rows: none;grid-template-columns: 1fr 1fr;height: 300px;place-items: center;`,
  })}
`;

export default Testimonials;
