import styled from 'styled-components';
import { Device } from '../src/globalStyles';

export const HeaderContainer = styled.header`
  height: 100vh;
  width: 100%;
  background: url('/headerbgpng.png');
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 100px;
  background-size: cover;
`;

export const HeaderInfoContainer = styled.div`
  display: grid;

  @media ${Device.desktop} {
    grid-template-columns: repeat(2, 40% 60%);
  }
`;

export const ContainerImgs = styled.div`
  position: relative;
  z-index: 1;
  /* 
  &::after {
    position: absolute;
    content: url('/degradeHeader.svg');
    top: -100px;
    z-index: -1;
    box-shadow: 3px 7px 10px -1px #000000;
  } */

  /* &::before {
    position: absolute;
    content: '';
    height: 100px;
    width: 83%;
    z-index: -1;
    bottom: 30px;
    right: -30px;
    transform: rotate(5deg);
    box-shadow: 10px 20px 23px 0px #000000;
  } */
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
  bottom: -130px;
  left: 0;
  @media (max-width: 1281px) {
    height: 210px;
  }
`;

export const HeaderImgDegrade = styled.img`
  position: absolute;
  left: -50px;
  top: -110px;
  z-index: -1;

  /* @media (max-width: 1281px){
    width: 100%;
    left: 0px;
    top: -100px;
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
