import styled from 'styled-components';
import {Device, Container} from '../../../src/globalStyles';

export const List = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 70px;
    left: ${({click}) => (click ? 0 : '-120%')};
    transition: left 1s ease;
    background: ${props => props.theme.colorPrimary};
    z-index: 10;
  }
`;

export const ListItem = styled.li`
  &:not(:last-child){
    margin-right: 1em;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    margin-right: 0!important;
  }
`;

export const Link = styled.a`
  font-weight: bold;
  color: ${props => props.theme.colorLink};
  align-items: center;
  display: flex;
  text-decoration: none;

  svg {
    margin: 0px 10px 4px 0px;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 1.5em 1.5em 1.5em 2.5em;
  }
`