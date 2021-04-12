import styles from '../Library.module.scss';

export default function LibGroup ({group}){

  return (
    <div className={styles.LibGrid}>
      <h2>{group.nameGroup}</h2>
      <div className={styles.Grid}>
        {group.data.map(el => (
          <div>
            {el.title}
            {<el.component title={el.title} />}
          </div>
        ))}

      </div>
    </div>
  );
};
