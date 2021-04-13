import styles from '@components/PlansPrices/PlanPrices.module.scss';
import PlayIcon from '../../SVG/PlayIcon';

export default function Module({ text }) {
  return (
    <div className={styles.Module}>
      <span className={styles.IconPlay}><PlayIcon /></span>
      {text}
    </div>
  );
}
