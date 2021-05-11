import { Button } from 'src/globalStyles';
import {
  HeaderContainer,
  HeaderImg,
  HeaderInfo,
  HeaderInfoContainer,
} from './Header.elements';
import Navbar from './Navbar/Navbar';

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <HeaderInfoContainer>
        <HeaderImg>imagen</HeaderImg>
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
