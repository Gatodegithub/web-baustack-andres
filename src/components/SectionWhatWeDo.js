import React from 'react';
import styled from 'styled-components';
import Waves from "./Main/Waves";
import {Row, Wrapper} from "./Main";
import Spinning from '../images/spinning.png'

export default function SectionWhatWeDo() {
  return (
    <Wrapper gradient={true}>
      <Waves.Top/>
      <SpinningContainerStyled>
        <img src={Spinning} alt=""/>
      </SpinningContainerStyled>
      <Row
        css={{
          default: `
              padding: 96px 16px;
              display: grid;
              gap: 32px;
            `,
        }}
      >


      </Row>
      <Waves.Bottom/>
    </Wrapper>
  );
};

const SpinningContainerStyled = styled.div`
  img{
    max-width: 60vw;
  }
`;