import { Container, Device } from 'src/globalStyles';
import styled from 'styled-components';

export const ContainerSectionOne = styled(Container)`
  display: grid;
  height: 100vh;

  @media ${Device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
  
  @media ${Device.medium} {
    grid-template-columns: repeat(2, 40% 60%);
  }
`;

export const TextContainer = styled.div`
  
`;

export const SvgContainer = styled.img`
  position: sticky;
  top: 0;
  z-index: 10;
`;