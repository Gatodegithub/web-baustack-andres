import BoxIconTop from '@components/TextBox/BoxIcon/BoxIconTop';
import { SettingsIcon } from '@components/SVG';
import BoxIconTopShadow from '@components/TextBox/BoxIcon/BoxIconTopShadow';

const title = 'Box icon top with shadow';

const description = 'Box de texto con icono circular y sombra';

const features = (
  <ul>
    <li>
      Acepta 3 propiedades: <b>"svgComponent", "title", "description"</b>.
      <ol>
        <li>
          <b>SvgComponent:</b> recibira el icono que ira en el top del box.
        </li>
        <li>
          <b>Title:</b> recibira el titulo del box.
        </li>
        <li>
          <b>Description:</b> recibe la descripción del box
        </li>
      </ol>
    </li>
  </ul>
);

const params = [
  {
    svgComponent: <SettingsIcon />,
    title: 'Easy setup',
    description:
      'Your system can be setup in minutes, it only requires a device connected to internet and an active email account.'
  },
];

const exemple = (
  <>
    {params.map((el) => (
      <BoxIconTopShadow
        svgComponent={el.svgComponent}
        title={el.title}
        description={el.description}
      />
    ))}
  </>
);

export default { title, description, features, exemple };
