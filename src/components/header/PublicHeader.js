import React from 'react';
import TableSVG from '../../images/main-table.svg';
import PersonSVG from '../../images/person.svg';
import {Wrapper, Row, Title} from '../helpers';
import ImportantShape from './ImportantShape';
import styled from 'styled-components';
import PublicMenu from "./PublicMenu";
import Waves from '../helpers/Waves';
import TryMeButton from './TryMeButton';
import responsive from '../helpers/responsive';
import ContainerStyled from '../helpers/styles/ContainerStyled';

export default function PublicHeader({children}) {
  return (
    <>
      <PublicMenu/>
      <Wrapper gradient={true}>

      <ContainerStyled >
        <Row
          css={{
            default: `
              padding: 96px 0px 0px;
              display: grid;
              gap: 32px;
            `,
            md: `
              grid-template-columns: 350px 1fr;
              gap: 0px;
            `,
            lg: `
              grid-template-columns: 450px 1fr;
            `,
            xl: `
              grid-template-columns: 530px 1fr;
            `
          }}
        >
          <ImportantShape>
            <TableStyled>
              <img src={TableSVG} alt=""/>
            </TableStyled>
            <PersonStyled>
              <img src={PersonSVG} alt=""/>
            </PersonStyled>
          </ImportantShape>

          <TitleContainerStyled>
            <Title.H1 color="white">
              Potencia la experiencia de tus clientes creando aplicaciones simples y en la nube.
            </Title.H1>
            <TryMeContainerStyled>
              <TryMeButton to="#">Prueba gratuita</TryMeButton>
            </TryMeContainerStyled>
          </TitleContainerStyled>
        </Row>
        </ContainerStyled>

        <Waves.Bottom />
      </Wrapper>
    </>
  );
};


const TableStyled = styled.figure`
  padding: 16px;

  img {
    width: 80%;
    transform: rotate(10deg);
    ${responsive({md: `width:100%;`})}
  }
`;

const PersonStyled = styled.figure`
  position: absolute;
  width: 50%;
  top: 50%;
  ${responsive({md: `width: 70%; left: -100px; top: 40%;`})}
  ${responsive({lg: `width: 70%; left: -130px; top: 50%;`})}
  ${responsive({xl: `width: 70%; left: -200px; top: 65%;`})}
`;

const TitleContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  ${responsive({lg: `justify-content: center; height: 390px;`})}
  ${responsive({xl: `justify-content: flex-end;`})}

  h1 {
    text-align: center;
    ${responsive({md: `text-align: center;`})}
    ${responsive({lg: `text-align: right;`})}
    ${responsive({xl: `text-align: right;font-size: 42px; line-height: 1.6em;`})}
  }
`;

const TryMeContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px 0;
  ${responsive({lg: `justify-content: right;`})}
  ${responsive({xl: `padding-bottom: 0px;`})}
`;