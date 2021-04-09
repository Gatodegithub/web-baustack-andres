import styles from "@lib/Library.module.scss";

const SetTitle = ({children}) => (
  <h2 className={styles.Set__title}>{children}</h2>
);

const SetDescription = ({children}) => (
  <div className={styles.Set__docs}>
    <p>{children}</p>
  </div>
);

const SetFeatureList = ({children}) => (
  <div className={styles.Set__properties}>
    <h4>Propiedades</h4>
    {!children ? "No tiene propiedades documentadas" : children}
  </div>
);

const SetExemple = ({children}) => (
  <div className={styles.Set__elements}>{children}</div>
);

const SetBlock = ({children}) => <div className={styles.Set}>{children}</div>;

export default SetBlock;
export { SetTitle, SetDescription, SetFeatureList, SetExemple };
