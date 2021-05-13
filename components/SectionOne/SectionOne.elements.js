import { Container, Device } from '../src/globalStyles';
import styled from 'styled-components';

export const ContainerSectionOne = styled(Container)`
  display: grid;
  justify-items: center;
  align-items: center;

  @media ${Device.mobile} {
    grid-template-rows: 200px 500px;
  }

  @media ${Device.desktop} {
    grid-template-rows: none;
    grid-template-columns: repeat(2, 60% 40%);
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  font-size: 48px;
  font-weight: bold;
  height: 100vh;
  text-align: left;
  max-width: 650px;
`;

export const SvgContainer = styled.img`
  position: sticky;
  
  z-index: 10;
  width: 300px;
  @media ${Device.desktop} {
    top: 0;
  }
  
  @media screen and (max-width: 1281px) {
    bottom: 0;
  }
`;
