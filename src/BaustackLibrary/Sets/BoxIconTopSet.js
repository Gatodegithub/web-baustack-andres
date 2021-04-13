import BoxIconTop from '@components/TextBox/BoxIcon/BoxIconTop';
import { DatabaseIcon } from '@components/SVG';

const title = 'Box Description Icon Top';

const description = 'Box de texto con icono en top';

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

const exemple = (
  <>
    <BoxIconTop
      svgComponent={<DatabaseIcon />}
      title="Create your information system"
      description="Create your custom management system, generating tables and setting up the information fields required by your business processes"
    />
  </>
);

export default { title, description, features, exemple };
