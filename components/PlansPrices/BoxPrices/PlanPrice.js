import styles from "@components/PlansPrices/PlanPrices.module.scss";

export default function PlanPrice({total, variant}) {
  const bkVariant = styles[`BkVariant${variant}`];

  return (
    <div className={`${styles.Price} ${bkVariant}`}>
      <div className={styles.ContTotal}>
        {total}
        <sup>USD</sup>
      </div>
      <p>USER/MONTH</p>
    </div>
  );
}
