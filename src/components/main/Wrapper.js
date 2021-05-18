import React from 'react';
import styled from "styled-components";
import Theme from './Theme';

const WrapperStyled = styled.section`
  width: 100%;
  background-image: ${props => props.gradient ? Theme.gradient : 'none'};
`;

const Wrapper = props => <WrapperStyled {...props}/>

export default Wrapper;