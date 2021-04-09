import styles from "@components/NavBar/NavBar.module.scss";
import Link from 'next/link';

export default function MenuLink({ linkArray }) {
  return (
    <div className={styles.MenuContainer}>
      {linkArray.map((el) => (
        <a href={el.sectionID}>{el.name}</a>
      ))}
    </div>
  );
}
