import * as React from "react";

import { Button, Container } from '../src/globalStyles';
import {
  Description,
  ImgWrap,
  PolygonLeft,
  PolygonRight,
  SectionThreeContainer,
  Slider,
  TextWrap,
  Title,
  TitleDesc,
} from './SectionThree.elements';

const SectionThree = () => {
  return (
    <Container>
      <SectionThreeContainer>
        <Title>
          Nuestros clientes resuelven sus problemas operativos con Baustack
        </Title>
        <Slider>
          <PolygonLeft src={'/Polygon 2.svg'}></PolygonLeft>
          <ImgWrap src={'/imgSlider.svg'}></ImgWrap>
          <TextWrap>
            <TitleDesc>SINTONIZA</TitleDesc>
            <Description>
              Sintoniza logró crear una bitácora de <br/>capacitación con cientos de
              usuarios <br/> en minutos…
            </Description>
            <Button>PRUEBA GRATUITA</Button>
          </TextWrap>
          <PolygonRight src={'/Polygon 3.svg'}></PolygonRight>
        </Slider>
      </SectionThreeContainer>
    </Container>
  );
};

export default SectionThree;
