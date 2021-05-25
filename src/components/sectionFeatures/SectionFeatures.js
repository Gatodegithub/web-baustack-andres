import React from 'react';
import styled from 'styled-components';
import Text from '../helpers/Text'
import Table from '../helpers/JSSVG/Table'
import {Row, Wrapper} from "../helpers";
import ContainerStyled from '../helpers/styles/ContainerStyled';
import responsive from '../helpers/responsive';
import shortID from 'shortid';

export default function SectionFeatures() {
  return (
    <Wrapper>
      <ContainerStyled>
      <Row css={{
        md: `
          display: grid;
          grid-template-columns: 1fr 1fr;
        `
      }}>
        <DataContainerStyled>
          {dataFeatures.map((el) => (
            <TextBlockStyled key={shortID.generate()}>
              <Text.H2 style={{lineHeight: '40px'}} >
                {el}
              </Text.H2>
            </TextBlockStyled>
          ))}
        </DataContainerStyled>
        <ImagesContainerStyled>
          <Table/>
        </ImagesContainerStyled>
      </Row>
      </ContainerStyled>
    </Wrapper>
  );
};


const dataFeatures = [
  'Permite a tus clientes ver en tiempo real el estatus de un servicio en curso',
  'Permite a tus clientes enviarte información de forma estructurada en un sistema seguro',
  'Entrega información en una aplicación en la nube y disponible en cualquier dispositivo',
  'Colabora en tiempo real con tu equipo y clientes en una base de datos única',
  'Ahorra tiempo y consolida toda la información de tus clientes o proveedores y programa notificaciones automáticas',
  'Posibilita el análisis de datos y construcción de métricas sobre una base de datos '
];

const DataContainerStyled = styled.div``;

const ImagesContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 0;
  background-color: white;

  svg {
    ${responsive({md: `position:sticky;top: 30%;margin-top: 2.2em;`})}
    max-width: 350px;
    height: max-content;
  }
`;

const TextBlockStyled = styled.div`
  min-height: 30vh;
  display: flex;
  justify-content: center;
  padding: 128px 16px;
  ${responsive({md: `min-height: 100vh;`})}
`;
