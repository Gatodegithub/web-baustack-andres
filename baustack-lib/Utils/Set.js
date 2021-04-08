import styles from "@lib/Library.module.scss";

export default function Set({ title, docs, children, properties }) {
  return (
    <div className={styles.Set}>
      <h2 className={styles.Set__title}>{title}</h2>
      <div className={styles.Set__docs}>{docs}</div>
      <div className={styles.Set__properties}>
        <h4>Propiedades</h4>
        {properties ? properties : 'No tiene propiedades documentadas'}
      </div>
      <div className={styles.Set__elements}>{children}</div>
    </div>
  );
}
