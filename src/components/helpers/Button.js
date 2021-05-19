import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Theme from "../helpers/Theme";

export default function Button({ to, children }) {
  return (
    <Link to={to}>
      <ButtonStyled>
        <div className="content">{children}</div>
        <div className="shape" />
      </ButtonStyled>
    </Link>
  );
}

const ButtonStyled = styled.div`
  background-color: ${Theme.red};
  color: white;
  display: inline-block;
  padding: 16px 32px;
  border-radius: 32px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  .content {
    z-index: 1;
    position: inherit;
  }
  .shape {
    position: absolute;
    z-index: 0;
    background-color: ${Theme.mauve};
    transition: width ease 400ms;
    height: 100%;
    top: 0;
    width: 0;
    left: 0;
  }

  &:hover .shape {
    width: 100%;
  }
`;
