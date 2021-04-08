import styles from "@components/Box-description/Box.module.scss";

export default function BoxDescription({ icon, title, description }) {
  return (
    <div className={styles.box}>
      <svg
        fill="#36b"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="186"
        height="124"
        viewBox="0 0 24 28"
      >
        {icon}
      </svg>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
