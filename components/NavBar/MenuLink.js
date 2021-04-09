import styles from "@components/NavBar/NavBar.module.scss";

export default function MenuLink({ linkArray }) {
  return (
    <div className={styles.MenuContainer}>
      {linkArray.map((el) => (
        <a href={el.sectionID}>{el.name}</a>
      ))}
    </div>
  );
}
