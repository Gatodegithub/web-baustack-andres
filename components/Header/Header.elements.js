import styled from 'styled-components';
import { Device } from '../src/globalStyles';

export const HeaderContainer = styled.header`
  height: 117vh;
  width: 100%;
  background: url('/headerbgpng.png') bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const HeaderInfoContainer = styled.div`
  padding-top: 105px;
  display: grid;

  @media ${Device.desktop} {
    grid-template-columns: repeat(2, 40% 60%);
  }
`;

export const ContainerImgs = styled.div`
  position: relative;
`;

export const HeaderImg = styled.img`
  margin-top: 60px;
  margin-left: 80px;
  transform: rotate(5deg);
  width: 487px;
  height: 396px;

  @media (max-width: 1281px) {
    margin-top: 0;
    width: 287px;
    height: 196px;
  }
`;

export const HeaderImgCharacter = styled.img`
  position: absolute;
  bottom: -145px;
  left: 0;
  @media (max-width: 1281px) {
    height: 210px;
  }
`;

export const HeaderImgWave = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  /* height: 100%; */
  /* width: 100%; */

  /* @media (max-width: 1400px) {
    top: 200px;
  } */

  /* @media (max-width: 1200px) {
    top: 250px;
  }

  @media (max-width: 800px) {
    top: 450px;
  }

  @media (max-width: 450px) {
    top: 750px;
  } */
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.5em;
  padding-right: 60px;
  color: ${(props) => props.theme.colorWhite};
  font-size: 42px;
  font-weight: bold;
  text-align: right;

  & button {
    align-self: flex-end;
    margin-top: 30px;
  }

  @media (max-width: 1281px) {
    text-align: center;
    padding-right: 0px;
    padding-top: 4.5em;
    font-size: 32px;

    & button {
      align-self: center;
    }
  }
`;
