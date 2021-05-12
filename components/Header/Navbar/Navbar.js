import { Container } from 'components/src/globalStyles';
import { Nav } from './Navbar.elements';
import NavbarLogo from './NavbarLogo/NavbarLogo';
import NavbarLinks from './NavbarLinks/NavbarLinks';

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <NavbarLogo />
        <NavbarLinks />
      </Nav>
    </Container>
  );
};

export default Navbar;
