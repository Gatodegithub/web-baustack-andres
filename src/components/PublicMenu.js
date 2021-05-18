import React from 'react';
import styled from 'styled-components';
import Theme from './Main/Theme'
import Logo from './Main/JSSVG/Logo'
import Menu from './Main/JSSVG/Menu'

const NavigationStyled = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 10;
  left: 0;
  right: 0;
  padding: 16px;

  svg {
    height: 24px;
    width: 24px;
  }
  
  .logo {
    background-color: ${Theme.darkmauve};
    display: flex;
    align-items: center;
    padding-left: 16px;
    border-radius: 24px 0 0 24px;
    h2{
      color: ${Theme.mauve};
      text-align: center;
      width: 100%;
    }
    svg {
      fill: ${Theme.mauve};
    }
  }

  .menu {
    display: flex;
    justify-content: flex-end;
    
    .trigger {
      background-color: ${Theme.mauve};
      height: 48px;
      width: 48px;
      border-radius: 0 24px 24px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        stroke: ${Theme.darkmauve};
      }
    }
  }
`;

export default function PublicMenu() {
  return (
    <NavigationStyled>
      <div className="logo">
        <Logo/>
        <h2>BAUSTACK</h2>
      </div>
      <div className="menu">
        <div className="trigger circle">
          <Menu/>
        </div>
      </div>
    </NavigationStyled>
  );
};
