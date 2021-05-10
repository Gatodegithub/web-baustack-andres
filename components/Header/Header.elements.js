import styled from 'styled-components';
import { Device } from '../../src/globalStyles';

export const HeaderContainer = styled.header`
  height: 100vh;
  width: 100%;
  background: url('/HeaderBackground.svg');
  background-repeat: no-repeat;
  background-position: bottom left;
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

export const HeaderDifuminado = styled.div`
  /* position: absolute;
  background: url('./difuminado.svg');
  width: 797px;
  height: 499px;
  overflow: visible; */
`;

export const HeaderImg = styled.div``;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2em;
  padding-right: 70px;
  color: ${(props) => props.theme.colorWhite};
  font-size: 48px;
  font-weight: bold;
  text-align: right;
`;
