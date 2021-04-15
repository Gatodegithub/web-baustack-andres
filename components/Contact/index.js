import styles from '@components/Contact/Contact.module.scss';
import ContactInformation from './Information/ContactInformation';
import InputText from './Inputs/InputText';
import InputTextArea from './Inputs/InputTextArea';
import SocialMedia from './SocialIcon/SocialMedia';

export default function ContactOrganism() {
  return (
    <section className={`${styles.ContainerSection}`}>
      <div className={styles.ContainerSection__inputs}>
          <InputText labelText="Nombre" name="nombre" id="nombre" type="text" />
          <InputText labelText="Email" name="email" id="email" type="text" />
          <InputText labelText="Phone" name="phone" id="phone" type="text" />
          <InputText labelText="Company" name="company" id="company" type="text" />
          <InputTextArea />
      </div>
      <div className={styles.ContainerSection__info}>
        <div>
          <ContactInformation />
          <h6 className={styles.ContainerSection__connect}>Connect with us</h6>
          <SocialMedia />
        </div>
      </div>
    </section>
  );
}
