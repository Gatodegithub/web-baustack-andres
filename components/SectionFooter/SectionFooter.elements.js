import { Container, Device } from '../src/globalStyles';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: url('/footerbgpng.png');
  height: 700px;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const FooterWrapper = styled(Container)`
    display: grid;
    justify-items: center;
    height: 100%;
    align-items: flex-end;
    grid-template-rows: 500px 100px;

  @media ${Device.desktop} {
    grid-template-columns: 1fr 1fr;
    justify-items: flex-start;
    align-items: flex-end;
    height: 80%;

    & button {
      margin-bottom: 40px;
    }
  }
`;

export const TextWrap = styled.div`
  color: ${(props) => props.theme.colorWhite};
  width: 260px;
`;

export const Title = styled.h2`
  font-size: 40px;
  margin: 0;
`;

export const Description = styled.p``;

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0px;
  justify-content: flex-start;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 25px;
  }
`;
