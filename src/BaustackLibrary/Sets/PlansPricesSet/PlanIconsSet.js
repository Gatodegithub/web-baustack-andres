import CheckIcon from '@components/PlansPrices/PlansIcons/CheckIcon';
import CancelIcon from '@components/PlansPrices/PlansIcons/CancelIcon';

const title = 'Plan svgComponents';

const description = 'Iconos svg utilizados en los planes, para indicar si cuenta con la caracteristica o no.';

const features = (
  <ul>
  <li>
    Estos iconos son svgComponents al igual que todos los demás en la web.
    No acepta propiedades.
  </li>
</ul>
);

const exemple = (
  <>
    <CheckIcon />
    <CancelIcon />
  </>
);

export default { title, description, features, exemple };
