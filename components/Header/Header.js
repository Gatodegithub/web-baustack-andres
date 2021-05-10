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
        <HeaderImg />
        <HeaderInfo />
      </HeaderInfoContainer>
    </HeaderContainer>
  );
};

export default Header;
