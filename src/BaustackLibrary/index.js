import AnchorLink from 'react-anchor-link-smooth-scroll'
import Library from './Data';
import {Logo} from "../Icons";
import styles from "./Library.module.scss";


export default function LibraryIndex() {
  return (
    <>
      <header className={styles.Header}>
        <Logo/>
        <h1>Librería Baustack</h1>
      </header>
      <section className={styles.Container}>
        <div className={styles.Body}>
          {Library.map((section, idx) => (
            <section className={styles.Group} key={idx}>
              <h2 className={styles.Group__title}>{section.title}</h2>
              {section.data.map(el => (
                <div className={styles.Set} key={el.id}>
                  <h3 id={el.id} className={styles.Set__title}>{el.title}</h3>
                  <p className={styles.Set__description}>{el.description}</p>
                  <div className={styles.Set__features}>
                    <h4>Features</h4>
                    <div>{el.features}</div>
                  </div>
                  <div className={styles.Set__exemple}>{el.exemple}</div>
                </div>
              ))}
            </section>
          ))}
        </div>
        <aside className={styles.Menu}>
          {Library.map((section, idx) => (
            <div key={idx}>
              <h2 className={styles.Menu__title}>{section.title}</h2>
              {section.data.map(el => (
                <div className={styles.Menu__anchor}>
                  <div className={styles.Menu__line}/>
                  <AnchorLink href={`#${el.id}`} key={el.id}>{el.title}</AnchorLink>
                </div>
              ))}
            </div>
          ))}
        </aside>
      </section>
    </>
  );
};
