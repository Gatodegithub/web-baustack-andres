import styles from '@components/PlansPrices/PlanPrices.module.scss';
import CancelIcon from '../../SVG/CancelIcon';

export default function Cancel() {
  return <span className={styles.IconCancel}>{<CancelIcon />}</span>;
}
