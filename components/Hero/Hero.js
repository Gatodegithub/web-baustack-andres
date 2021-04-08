import styles from "@components/Hero/Hero.module.scss";

export default function Hero({title, description, href}) {
  return (
    <div className={styles.hero}>
      <div>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
      <a href={href}>Comenzar</a>
      </div>
      <div>
        <figure className="img">
          <img src="" alt="" />
        </figure>
      </div>
    </div>
  );
}
