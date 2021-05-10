import { IdeaIcon, CardIcon, PhoneIcon, PeopleIcon } from '@components/SVG';
import { List, ListItem, Link } from './NavbarLink.elements';

const NavbarLinks = () => {
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
    <List>
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
