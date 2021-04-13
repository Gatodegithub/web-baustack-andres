import Features from '@components/PlansPrices/features/Features';

const title = 'Plan features';

const description = 'Caracteristicas del plan';

const features = (
  <ul>
    <li>
      Acepta 1 propiedad: <b>"text"</b>.
      <ol>
        <li>
          <b>Text:</b> nombre de la caracteristica
        </li>
      </ol>
    </li>
  </ul>
);

const exemple = (
  <>
    <Features text="System" />
  </>
);

export default { title, description, features, exemple };
