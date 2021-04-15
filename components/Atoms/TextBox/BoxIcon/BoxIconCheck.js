import styles from "@components/Atoms/TextBox/TextBox.module.scss";
import { CheckIcon } from '../../../SVG';

export default function BoxIcon({ description }) {
  return (
    <div className={styles.BoxIconCheck}>
      <div>
        <CheckIcon />
      </div>
      <p>{description}</p>
    </div>
  );
}