import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px 10px;
  width: 100%;
  z-index: 9999;
  /* @media screen and (max-width: 900px) { */
    background-color: ${props => props.theme.colorPrimary}
  /* } */
`;

export const MobileIcon = styled.div`
  display: none;
  fill: ${props => props.theme.colorWhite};

  @media screen and (max-width: 900px) {
    display: block;
  }
`;