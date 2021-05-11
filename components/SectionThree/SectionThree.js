import { Button, Container } from 'src/globalStyles';
import {
  Description,
  ImgWrap,
  Polygon,
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
          <Polygon src={'/Polygon 2.svg'}></Polygon>
          <ImgWrap src={'/imgSlider.svg'}></ImgWrap>
          <TextWrap>
            <TitleDesc>SINTONIZA</TitleDesc>
            <Description>
              Sintoniza logró crear una bitácora de capacitación con cientos de
              usuarios en minutos…
            </Description>
            <Button>PRUEBA GRATUITA</Button>
          </TextWrap>
          <Polygon src={'/Polygon 3.svg'}></Polygon>
        </Slider>
      </SectionThreeContainer>
    </Container>
  );
};

export default SectionThree;
