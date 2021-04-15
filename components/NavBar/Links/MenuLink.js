import styles from '@components/NavBar/NavBar.module.scss';

export default function MenuLink({ linkArray }) {
  const linkArray = [
    {
      sectionID: null,
      name: 'Inicio',
    },
    {
      sectionID: null,
      name: 'Precios',
    },
    {
      sectionID: null,
      name: 'Contacto',
    },
  ];
  
  return (
    <div className={styles.MenuContainer}>
      {linkArray.map((el) => (
        <a href={el.sectionID} key={el.name}>
          {el.name}
        </a>
      ))}
    </div>
  );
}
