import styles from "@components/Atoms/TextBox/TextBox.module.scss";

export default function BoxIconTopShadow({svgComponent, title, description}) {
  return (
    <div className={styles.CircleShadowContainer}>
      <div className={styles.CircleShadow}>{svgComponent}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
