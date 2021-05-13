import * as React from "react";

import { Button } from "../src/globalStyles";
import {
  HeaderContainer,
  HeaderImg,
  HeaderInfo,
  HeaderInfoContainer,
  HeaderImgCharacter,
  HeaderImgWave,
  ContainerImgs,
} from "./Header.elements";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar />
      <HeaderInfoContainer>
        <ContainerImgs>
          <HeaderImg src={"/Mockup App.png"}></HeaderImg>
          <HeaderImgCharacter src={"/character.svg"}></HeaderImgCharacter>
        </ContainerImgs>

        <HeaderImgWave src={"/headerbgwave.png"}></HeaderImgWave>
        <HeaderInfo>
          Potencia la experiencia de tus clientes creando aplicaciones simples y
          en la nube.
          <Button>PRUEBA GRATUITA</Button>
        </HeaderInfo>
      </HeaderInfoContainer>
    </HeaderContainer>
  );
};

export default Header;
