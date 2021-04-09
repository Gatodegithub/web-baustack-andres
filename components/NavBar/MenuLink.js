import styles from "@components/NavBar/NavBar.module.scss";

export default function MenuLink({ firstHref, secondHref, thirdHref }) {
  return (
    <div className={styles.MenuContainer}>
      <a href={firstHref}>Inicio</a>
      <a href={secondHref}>Precios</a>
      <a href={thirdHref}>Contacto</a>
    </div>
  );
}
