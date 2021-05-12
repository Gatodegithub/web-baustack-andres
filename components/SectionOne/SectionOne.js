import { ContainerSectionOne, TextContainer, SvgContainer } from './SectionOne.elements';

const SectionOne = () => {
  return (
    <ContainerSectionOne>
      <TextContainer>
      Permite a tus clientes ver en tiempo real el estatus de un servicio en curso
      {/* Permite a tus clientes enviarte información de forma estructurada en un sistema seguro.

      Entrega información en una aplicación en la nube y disponible en cualquier dispositivo.

      Colabora en tiempo real con tu equipo y clientes en una base de datos única.

      Ahorra tiempo y consolida toda la información de tus clientes o proveedores y programa notificaciones automáticas.

      Posibilita el análisis de datos y construcción de métricas sobre una base de datos. */}
      </TextContainer>
      <SvgContainer src={'/Mockup App.png'}></SvgContainer>
    </ContainerSectionOne>
  );
};

export default SectionOne;
