import React from "react";
import styled from "styled-components";
import Theme from "../helpers/Theme";
import Logo from "../helpers/JSSVG/Logo";
import Menu from "../helpers/JSSVG/Menu";
import responsive from "../helpers/responsive";
import NavbarLinks from "./NavbarLinks";

const NavigationStyled = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  top: 0;
  position: fixed;
  width: 100%;
  z-index: 1000;
  left: 0;
  right: 0;
  padding: 16px;
  max-width: 1360px;
  ${responsive({
    md: `grid-template-columns: auto 1fr;background-color:${
      Theme.darkmauve + "99"
    };padding: 8px 16px;`,
  })}
  ${responsive({ lg: `margin: auto;padding-right: 52px;padding-left: 52px;` })}

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

    ${responsive({
      md: `cursor:pointer;background-color: white;justify-content:center; width:40px;height:40px;border-radius:50%;padding-left: 0px;`,
    })}
    h2 {
      color: ${Theme.mauve};
      text-align: center;
      width: 100%;
      ${responsive({ md: `display: none;` })}
    }
    svg {
      fill: ${Theme.mauve};
      ${responsive({ md: `fill: ${Theme.darkmauve};width: 20px;height:20px;` })}
    }
  }

  .menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .trigger {
      background-color: ${Theme.mauve};
      height: 48px;
      width: 48px;
      border-radius: 0 24px 24px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      ${responsive({ md: `display: none;` })}
      svg {
        stroke: ${Theme.darkmauve};
      }
    }

    ul {
      display: none;
      ${responsive({ md: `display: flex;` })}
    }
  }
`;

export default function PublicMenu() {
  return (
    <NavigationStyled>
      <div className="logo">
        <Logo />
        <h2>BAUSTACK</h2>
      </div>
      <div className="menu">
        <div className="trigger">
          <Menu />
        </div>
        <NavbarLinks />
      </div>
    </NavigationStyled>
  );
}
