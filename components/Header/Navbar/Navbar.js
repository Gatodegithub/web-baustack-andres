import * as React from "react";

import { MobileIcon, Nav } from "./Navbar.elements";
import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import { Menu } from "../../SVG";
import { useState } from "react";
import Cross from "../../SVG/HeaderIcons/Cross";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Nav>
      <NavbarLogo />
      <NavbarLinks click={click} />
      <MobileIcon onClick={handleClick}>
        {click ? <Cross /> : <Menu />}
      </MobileIcon>
    </Nav>
  );
};

export default Navbar;
