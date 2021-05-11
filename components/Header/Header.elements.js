import styled from 'styled-components';
import { Device } from '../../src/globalStyles';

export const HeaderContainer = styled.header`
  height: 100vh;
  width: 100%;
  background: url('/headerbg.svg');
  background-repeat: no-repeat;
  background-position: 30% 60%;
  padding-bottom: 100px;
`;

export const HeaderInfoContainer = styled.div`
  display: grid;

  @media ${Device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${Device.medium} {
    grid-template-columns: repeat(2, 40% 60%);
  }
`;

export const ContainerImgs = styled.div`
  position: relative;
  z-index: 1;

  &::after {
    position: absolute;
    content: url('/degradeHeader.svg');
    top: -100px;
    z-index: -1;
    /* box-shadow: 3px 7px 10px -1px #000000; */
  }

  &::before {
    position: absolute;
    content: '';
    height: 100px;
    width: 83%;
    z-index: -1;
    bottom: 30px;
    right: -30px;
    transform: rotate(5deg);
    box-shadow: 10px 20px 23px 0px #000000;
  }
`;

export const HeaderImg = styled.img`
  margin-top: 60px;
  margin-left: 65px;
  transform: rotate(5deg);
  /* z-index: 1; */
`;

export const HeaderImgCharacter = styled.img`
  position: absolute;
  bottom: -130px;
  left: 0;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2.5em;
  padding-right: 60px;
  color: ${(props) => props.theme.colorWhite};
  font-size: 42px;
  font-weight: bold;
  text-align: right;

  & button {
    align-self: flex-end;
    margin-top: 30px;
  }
`;
