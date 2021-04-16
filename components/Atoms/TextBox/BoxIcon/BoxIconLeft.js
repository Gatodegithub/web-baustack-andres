import styles from "@components/Atoms/TextBox/TextBox.module.scss";

export default function BoxIcon({ variant, svgComponent, title, description }) {
  const bkVariant = styles[`BkVariant${variant}`];
  console.log(bkVariant);
  return (
    <div className={styles.BoxIconLeft}>
      <div className={`${styles.Icon} ${bkVariant}`}>{svgComponent}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
