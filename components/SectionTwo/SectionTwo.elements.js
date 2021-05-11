import { Container } from 'src/globalStyles';
import styled from 'styled-components';

// Como hago para adaptar el background image al tamaño del contenedor ??
export const ContainerImg = styled.section`
  height: 100vh;
  width: 100%;
  background: url('./sectiondos.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  @media (min-width: 900px) {
    height: 100vh;
    padding-bottom: 580px;
  }
`;

export const Wrapper = styled(Container)`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: flex-end;
  /* justify-items: flex-end; */
`;

export const TextContainer = styled.div`
  color: ${(props) => props.theme.colorWhite};
`;

// export const Img = styled.div`
//   width: 100%;
//   /* background: url('./SectionTwo.svg'); */
//   background-position: center;
//   background-repeat: no-repeat;
//   height: 100%;
// `
