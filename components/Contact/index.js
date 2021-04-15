import styles from '@components/Contact/Contact.module.scss';
import ContactInformation from './Information/ContactInformation';
import InputText from './Inputs/InputText';
import InputTextArea from './Inputs/InputTextArea';
import SocialMedia from './SocialIcon/SocialMedia';

export default function ContactOrganism() {
  return (
    <section className={`${styles.ContainerSection}`}>
      <div className={styles.ContainerInputs}>
        <div>
          <InputText labelText="Nombre" name="nombre" id="nombre" type="text" />
          <InputText labelText="Email" name="email" id="email" type="text" />
          <InputText labelText="Phone" name="phone" id="phone" type="text" />
          <InputText labelText="Company" name="company" id="company" type="text" />
          <InputTextArea />
        </div>
      </div>
      <div className={styles.ContainerSection__info}>
        <ContactInformation />
        <h6>Connect with us</h6>
        <SocialMedia />
      </div>
    </section>
  );
}
