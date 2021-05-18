import React from 'react';
import styled from 'styled-components';
import Text from './Main/Text'
import Table from './Main/JSSVG/Table'
import {Row, Wrapper} from "./Main";

export default function SectionFeatures() {
  return (
    <Wrapper>
      <Row>
        <DataContainerStyled>
          {dataFeatures.map((el, idx) => (
            <TextBlockStyled key={idx}>
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
  position: sticky;
  bottom: 0;
  background-color: white;
`;

const TextBlockStyled = styled.div`
  min-height: 30vh;
  display: flex;
  justify-content: center;
  padding: 128px 16px;
`;
