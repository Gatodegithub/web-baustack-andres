import { Button } from 'components/src/globalStyles';
import {
  HeaderContainer,
  HeaderImg,
  HeaderInfo,
  HeaderInfoContainer,
  HeaderImgCharacter,
  ContainerImgs,
  HeaderImgDegrade,
} from './Header.elements';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <HeaderInfoContainer>
        <ContainerImgs>
          <HeaderImg src={'/Mockup App.png'}></HeaderImg>
          <HeaderImgCharacter src={'/character.svg'}></HeaderImgCharacter>
          {/* <HeaderImgDegrade src={'/degradeHeader.svg'}></HeaderImgDegrade> */}
        </ContainerImgs>
        <HeaderInfo>
          Potencia la experiencia de tus clientes creando aplicaciones simples y
          en la nube.
          <Button>PRUEBA GRATUITA</Button>
        </HeaderInfo>
      </HeaderInfoContainer>
    </HeaderContainer>
  );
};

export default Header;
