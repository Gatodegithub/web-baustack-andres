import * as React from "react"
import { IdeaIcon, CardIcon, PhoneIcon, PeopleIcon } from '../../../SVG';
import { List, ListItem, Link } from './NavbarLink.elements';

const NavbarLinks = ({click}) => {
  const arrayLinks = [
    {
      icon: <IdeaIcon />,
      text: 'SERVICIOS',
      href: '#services',
    },
    {
      icon: <CardIcon />,
      text: 'PRECIOS',
      href: '#prices',
    },
    {
      icon: <PhoneIcon />,
      text: 'CONTACTO',
      href: '#contact',
    },
    {
      icon: <PeopleIcon />,
      text: 'LOGIN',
      href: '#login',
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

export default NavbarLinks;
