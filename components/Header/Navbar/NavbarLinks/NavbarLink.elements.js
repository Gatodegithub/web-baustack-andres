import styled from 'styled-components';
import {Device, Container} from '../../../../src/globalStyles';

export const List = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 900px){
    display: none;
  }
`;

export const ListItem = styled.li`
  &:not(:last-child){
    margin-right: 1em;
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
`