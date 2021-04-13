import styles from '@components/Contact/Contact.module.scss';

export default function InputText({ labelText, name, id, type }) {
  return (
    <div className={styles.InputText}>
      <div>
        <label htmlFor={name}>{labelText}</label>
      </div>
      <input name={name} id={id} type={type} />
    </div>
  );
}
