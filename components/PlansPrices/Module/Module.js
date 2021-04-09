import styles from "@components/PlansPrices/PlanPrices.module.scss";

export default function Module({text }) {
  return (
    <div>
      <span className={styles.IconPlay}></span> {text}
    </div>
  );
}
