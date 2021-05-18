import React from 'react';
import styled from 'styled-components';
import Shape from '../images/important-shape.png';
import responsive from './main/responsive';

const ShapeContainer = styled.figure`
  position: absolute;
  height: 100%;
  left: -100px;
  right: -100px;
  top: -80px;
  ${responsive({md: `left: -100px; right: -100px;top: -60px;`})}
  ${responsive({lg: `left: -240px; right: -290px; top: -150px`})}
`;

export default function ImportantShape({children}) {
  return (
    <div>
      <ShapeContainer>
        <img src={Shape} alt=""/>
      </ShapeContainer>
      {children}
    </div>
  );
};
