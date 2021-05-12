import Idea from '@components/SVG/Idea';
import { Button, RectangularBox } from 'src/globalStyles';
import { ContainerImg, TextContainer, Wrapper, Img } from './SectionTwo.elements';

const SectionTwo = () => {
  return (
    <ContainerImg>
      <Wrapper>
        <TextContainer>
          ¿Cómo funciona Baustack?
          <Button>PRUEBA GRATUITA</Button>
        </TextContainer>
        <RectangularBox>
          <Idea />
          <p>
            Programa notificaciones
            <br /> por correo
          </p>
        </RectangularBox>
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
