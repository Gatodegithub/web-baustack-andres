import { Button } from 'src/globalStyles';
import { ContainerImg, TextContainer, Wrapper } from './SectionTwo.elements';
// import Secdos from '../../public/Secdos';

const SectionTwo = () => {
  return (
    <ContainerImg>
      {/* <Secdos /> */}
      <Wrapper>
        <TextContainer>
          ¿Cómo funciona Baustack?
          <Button>PRUEBA GRATUITA</Button>
        </TextContainer>
      </Wrapper>
    </ContainerImg>
  );
};

export default SectionTwo;
