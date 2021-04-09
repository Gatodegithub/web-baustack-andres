import styles from "@components/TextBox/TextBox.module.scss";

export default function BoxDescription({ icon, title, description }) {
  return (
    <div className={styles.Box}>
      <div className={styles.BkVariant5}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
