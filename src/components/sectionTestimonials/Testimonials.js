import React from "react";
import styled from "styled-components";
import { Row, Theme, Title, Wrapper } from "../helpers";
import ContainerStyled from "../helpers/styles/ContainerStyled";
import PolygonSli from "../../images/Polygon.svg";
import ImgSlider from "../../images/imgSlider.svg";
import TryMeButton from "./TryMeButton";

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
          <Slider>
            <Polygon>
              <img src={PolygonSli} alt="Polygon slider" />
            </Polygon>
            <Content>
              <Figure>
                <img src={ImgSlider} alt="Polygon slider" />
              </Figure>
              <FigCaption>
                <Title.H2 color={'white'}>SINTONIZA</Title.H2>
                <Title.P color={'white'}>
                  Sintoniza logró crear una bitácora de capacitación con cientos
                  de usuarios en minutos…
                </Title.P>
                <TryMeButton>PRUEBA GRATUITA</TryMeButton>
              </FigCaption>
            </Content>
            <Polygon>
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 20px;
  }
`;

export const Figure = styled.figure`
  display: flex;
  img {
    width: 170px;
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
  padding-bottom: 1em;

  & > figure:nth-child(3) img {
    transform: rotate(180deg);
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr;
  row-gap: 20px;
`;

export default Testimonials;
