import styles from "@components/TextBox/TextBox.module.scss";

export default function BoxIcon({ variant, svgComponent, title, description }) {
  const bkVariant = styles[`BkVariant${variant}`];
  return (
    <div className={styles.BoxIconLeft}>
      <div className={`${styles.BoxIconLeft.Icon} ${bkVariant}`}>{svgComponent}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
