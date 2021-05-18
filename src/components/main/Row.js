import React from 'react';
import styled from "styled-components";
import responsive from "./responsive";

const RowStyled = styled.section`
  ${
    ({css}) => responsive(css)
  }
`;

const Row = props => <RowStyled {...props} />

export default Row;