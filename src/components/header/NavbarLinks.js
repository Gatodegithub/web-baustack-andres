import * as React from "react"
import styled from 'styled-components';
import {IdeaIcon, CardIcon, PhoneIcon, PeopleIcon} from '../helpers/JSSVG';

const NavbarLinks = ({click}) => {
  const arrayLinks = [
    {
      icon: <IdeaIcon />,
      text: 'SERVICIOS',
      href: '/',
    },
    {
      icon: <CardIcon />,
      text: 'PRECIOS',
      href: '/',
    },
    {
      icon: <PhoneIcon />,
      text: 'CONTACTO',
      href: '/',
    },
    {
      icon: <PeopleIcon />,
      text: 'LOGIN',
      href: '/',
    },
  ];

  return (
    <List click={click}>
      {arrayLinks.map((el, index) => {
        return (
          <ListItem key={index}>
            <Link href={el.href}>
              {el.icon} {el.text}
            </Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const ListItem = styled.li`
  &:not(:last-child){
    margin-right: 1em;
  }
`;

export const Link = styled.a`
  font-weight: bold;
  color: white;
  align-items: center;
  display: flex;
  text-decoration: none;

  svg {
    margin: 0px 10px 4px 0px;
  }
`

export default NavbarLinks;