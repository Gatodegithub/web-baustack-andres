import BoxIconLeft from '@components/TextBox/BoxIcon/BoxIconLeft';
import { AdminIcon } from '@components/SVG/';

const title = 'Box Icon Left';

const description = 'Box de texto con icono a la izquierda';

const features = (
  <ul>
    <li>Este componente es escalable, recibe un array con objetos</li>

    <li>
      Acepta 4 propiedades:{' '}
      <b>"variant", "svgComponent", "title" y "description"</b>.
      <ol>
        <li>
          <b>Variant:</b> define el color del icono con numeros del 1 al 5.
        </li>
        <li>
          <b>SvgComponent:</b> recibe el icono.
        </li>
        <li>
          <b>Title:</b> recibe el titulo deseado.
        </li>
        <li>
          <b>Description:</b> recibe la descripción deseada.
        </li>
      </ol>
    </li>
  </ul>
);

const params = [
  {
    svgComponent: <AdminIcon />,
    variant: 2,
    title: 'Sistema autoadministrable',
    description:
      'Al iniciar la configuración podrás crear las tablas y columnas que albergarán la información de tu negocio.',
  },
];

const exemple = (
  <>
    {params.map((el) => (
      <BoxIconLeft
        svgComponent={el.svgComponent}
        variant={el.variant}
        title={el.title}
        description={el.description}
      />
    ))}
  </>
);

export default { title, description, features, exemple };
