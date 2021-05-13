import * as React from "react";
import Idea from '../SVG/Idea';
import { Button, RectangularBox } from '../src/globalStyles';
import { ContainerImg, TextContainer, Wrapper, Imgs } from './SectionTwo.elements';

const SectionTwo = () => {
  return (
    <ContainerImg>
      <Imgs src={'/bgcentralpng.png'} />
      <Wrapper>
        <TextContainer>
          ¿Cómo funciona Baustack?
          <Button>PRUEBA GRATUITA</Button>
        </TextContainer>
        <RectangularBox>
          <Idea />
          <p>
            Co-creamos
            <br /> aplicaciones en minutos
            <br /> utilizando la tecnología <br />
            “No Code”
          </p>
        </RectangularBox>
      </Wrapper>
    </ContainerImg>
  );
};

export default SectionTwo;
