import styles from '@components/Contact/Contact.module.scss';
import { LocationIcon, PhoneIcon, MailIcon } from '../../SVG/';

export default function ContactInformation() {
  return (
    <div className={styles.ContactInfo}>
      <h3>Contact Information</h3>
      <div className={styles.ContactInfo__content}>
        <div>
          <div><LocationIcon /></div>
          <div>
            <h6>Pragmalab SPA</h6>
            <p>
              Avenida Pedro de Valdivia 1215, Of. 501, Providencia, Santiago,
              Chile.
            </p>
          </div>
        </div>

        <div>
          <div>
            <PhoneIcon />
          </div>
          <div>
            <h6>+56 9 8804 0293</h6>
          </div>
        </div>

        <div>
          <div>
            <MailIcon />
          </div>
          <div>
            <h6>
              <a href="mailto:contacto@pragmalab.cl">contacto@pragmalab.cl</a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
