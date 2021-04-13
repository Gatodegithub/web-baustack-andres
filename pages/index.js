import ContactInformation from '@components/Contact/Information/ContactInformation';
import SocialMedia from '@components/Contact/SocialIcon/SocialMedia';
import PlanPrice from '@components/PlansPrices/BoxPrices/PlanPrice';
import Module from '@components/PlansPrices/features/Features';
import CancelIcon from '@components/PlansPrices/PlansIcons/CancelIcon';
import CheckIcon from '@components/PlansPrices/PlansIcons/CheckIcon';
import BoxIconCheck from '@components/TextBox/BoxIcon/BoxIconCheck';
import BoxIconTopShadow from '@components/TextBox/BoxIcon/BoxIconTopShadow';
import Link from 'next/link';

export default function Index() {
  return (
    <div style={{ marginLeft: '1em' }}>
      <h1>Home</h1>
      <Link href="/library">
        <a>Librería</a>
      </Link>

      <PlanPrice total={10} variant={1} />
      <br />
      <Module text="Systems" />
      <br />
      <CancelIcon />
      <br />
      <CheckIcon />
      <br />
      <ContactInformation />
      <br />
      <SocialMedia />
      <br />
      <BoxIconCheck description="The administrator profile will have access to all the functionalities of the system." />
    </div>
  );
}
