import React, { useState  } from "react";
import styled from "styled-components";
import { Row, Theme, Title, Wrapper } from "../helpers";
import ContainerStyled from "../helpers/styles/ContainerStyled";
import PolygonSli from "../../images/Polygon.svg";
import TryMeButton from "./TryMeButton";
import responsive from "../helpers/responsive";

const data = [
  {
    img: require('../../images/imgSlider.svg').default,
    title: "SINTONIZA",
    description:
      "Sintoniza logró crear una bitácora de capacitación con cientos de usuarios en minutos…",
  },
  {
    img: require('../../images/person.svg').default,
    title: "segundo titulo",
    description: "segunda descripción",
  },
  {
    img: require('../../images/person.svg').default,
    title: "tercer titulo",
    description: "tercera descripción",
  },
];

function Testimonials() {
  const [state, setState] = useState(0);

  console.log(state);
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
          <Slider>
            <Polygon onClick={() => state === 0 ? setState(data.length - 1) : setState(state - 1)}>
              <img src={PolygonSli} alt="Polygon slider" />
            </Polygon>
            <Content>
              <Figure>
                <img src={data[state].img} alt="Polygon slider" />
              </Figure>
              <FigCaption>
                <Title.H2 color={"white"}>{data[state].title}</Title.H2>
                <Title.P color={"white"}>
                  {data[state].description}
                </Title.P>
                <TryMeButton to="#">PRUEBA GRATUITA</TryMeButton>
              </FigCaption>
            </Content>
            <Polygon onClick={() => state === data.length - 1 ? setState(0) : setState(state + 1)}>
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
  h2 {
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
  background-color: ${Theme.darkmauve};
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
