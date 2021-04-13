import styles from '@components/Contact/Contact.module.scss';

export default function InputTextArea() {
  return (
    <div className={styles.InputTextArea}>
      <div>
        <label htmlFor="message">Message</label>
      </div>
      <textarea name="message" id="message" rows="3" />
    </div>
  );
}
