import React from 'react';
import styled from "styled-components";
import Theme from './Theme';

const WrapperStyled = styled.section`
  width: 100%;
  max-width: 1360px;
  margin-right: auto;
  margin-left: auto;
  background-image: ${props => props.gradient ? Theme.gradient : 'none'};
  margin-top: ${({mt}) => mt ? mt : ''};
  margin-bottom: ${({mb}) => mb ? mb : ''};
`;

const Wrapper = props => <WrapperStyled {...props}/>

export default Wrapper;