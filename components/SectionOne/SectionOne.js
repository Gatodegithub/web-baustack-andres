import * as React from "react";
import {
  ContainerSectionOne,
  TextContainer,
  SvgContainer,
} from "./SectionOne.elements";

const SectionOne = () => {
  return (
    <ContainerSectionOne>
        <TextContainer>
          Permite a tus clientes ver en tiempo real el estatus de un servicio en
          curso
        </TextContainer>
      <SvgContainer src={"/Mockup App.png"}></SvgContainer>
    </ContainerSectionOne>
  );
};

export default SectionOne;
