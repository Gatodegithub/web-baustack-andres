import styles from "@components/TextBox/TextBox.module.scss";

export default function BoxCallToAction({ title, description, href }) {
  return (
    <div className={styles.hero}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={href}>Comenzar</a>
      </div>
    </div>
  );
}
