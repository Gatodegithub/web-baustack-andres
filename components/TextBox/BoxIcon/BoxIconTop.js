import styles from "@components/TextBox/TextBox.module.scss";

export default function BoxDescription({ svgComponent, title, description }) {
  return (
    <div className={styles.Box}>
      <div className={styles.BkBlue}>{svgComponent}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
