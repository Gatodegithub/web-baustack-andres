import React from 'react';
import styled from 'styled-components';
import Theme from "./Theme";


const H1Styled = styled.h1`
  font-size: 32px;
  line-height: 42px;
  color: ${props => props.color || Theme.black};
  ${props => props.style ||  ''}
`;

const H2Styled = styled.h2`
  font-size: 26px;
  color: ${props => props.color || Theme.black};
  ${props => props.style ||  ''}
`;

const H3Styled = styled.h3`
  font-size: 20px;
  color: ${props => props.color || Theme.black};
  ${props => props.style ||  ''}
`;

const PStyled = styled.p`
  color: ${props => props.color || Theme.black};
  ${props => props.style ||  ''}
`;

const H1 = props => <H1Styled {...props} />
const H2 = props => <H2Styled {...props} />
const H3 = props => <H3Styled {...props} />
const P = props => <PStyled {...props} />

const Set = {H1,H2,H3,P}

export default Set;