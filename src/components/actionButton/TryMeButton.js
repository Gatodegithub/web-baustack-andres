import React from 'react';
import styled from 'styled-components';
import Button from '../helpers/Button'
import Experiment from '../helpers/JSSVG/Experiment';

export default function TryMeButton ({to, children}){
  return (
    <Button to={to}>
      <ButtonContentStyled>
        <Experiment/>
        <CTAStyled>{children}</CTAStyled>
      </ButtonContentStyled>
    </Button>
  );
};

const ButtonContentStyled = styled.div`
  display: flex;
  align-items: center;
  svg{
    height: 32px;
  }
`;

const CTAStyled = styled.div`
  padding-left: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;