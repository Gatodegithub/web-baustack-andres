import { Button } from 'components/src/globalStyles';
import {
  Description,
  FooterContainer,
  FooterWrapper,
  TextWrap,
  Title,
  List,
  ListItem,
} from './SectionFooter.elements';
import Facebook from '../SVG/Facebook';
import Instagram from '../SVG/Instagram';

const SectionFooter = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <TextWrap>
          <Title>
            Baustack<sup>®</sup>
          </Title>
          <Description>
            Desarrollamos herramientas No-Code para PYMES. Encuentranos en redes
            sociales
          </Description>
          <List>
            <ListItem>
              <Facebook />
            </ListItem>
            <ListItem>
              <Instagram />
            </ListItem>
          </List>
        </TextWrap>
        <Button>PRUEBA GRATUITA</Button>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default SectionFooter;
