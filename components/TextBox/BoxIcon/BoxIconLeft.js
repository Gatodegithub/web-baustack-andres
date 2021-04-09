import styles from "@components/TextBox/TextBox.module.scss";

export default function BoxIcon({ variant, icon, title, description }) {
  const bkVariant = styles[`BkVariant${variant}`];
  return (
    <div className={styles.BoxIconLeft}>
      <div className={`${styles.Icon} ${bkVariant}`}>{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
