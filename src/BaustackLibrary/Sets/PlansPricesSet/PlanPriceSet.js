import PlanPrice from '@components/PlansPrices/BoxPrices/PlanPrice';

const title = 'Precio del plan';

const description = 'Caja con el precio del plan';

const features = (
  <ul>
    <li>
      Acepta 2 propiedades: <b>"total", "variant"</b>.
      <ol>
        <li>
          <b>Total:</b> el precio total del plan
        </li>
        <li>
          <b>Variant:</b> color de la caja, acepta un 1 (blue) o un 2 (gris)
        </li>
      </ol>
    </li>
  </ul>
);

const exemple = (
  <>
    <PlanPrice total={10} variant={1} />
  </>
);

export default { title, description, features, exemple };
