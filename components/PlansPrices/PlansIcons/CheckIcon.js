import styles from '@components/PlansPrices/PlanPrices.module.scss';
import CheckIcon from '../../SVG/CheckIcon';

export default function Cancel() {
  return <span className={styles.IconCheck}>{<CheckIcon />}</span>;
}
