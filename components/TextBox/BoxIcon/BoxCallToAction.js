import styles from "@components/TextBox/TextBox.module.scss";
import {PlayIcon} from "@components/SVG";

export default function BoxCallToAction({
  title,
  description,
  href,
  callToAction,
}) {
  return (
    <div className={styles.BoxCallToAction}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={href}>
          <PlayIcon />
          {callToAction}
        </a>
      </div>
    </div>
  );
}
