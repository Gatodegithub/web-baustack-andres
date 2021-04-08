import Set from "@lib/Utils/Set";
import BoxIconLeft from "@components/TextBox/BoxIcon/BoxIconLeft";
//import {AdminIcon, People} from '@components/SVG';
import AdminIcon from "@components/SVG/AdminIcon";

export default function BoxDescriptionSet() {
  const docs = <p>Box con icono a la izquierda y descripción</p>;
  const properties = (
    <ul>
      <li>
        Acepta 3 propiedades: <b>"icono(solo svg)", "titulo", "descripción"</b>
      </li>
    </ul>
  );

  const title = "Sistema autoadministrable",
    description =
      "Al iniciar la configuración podrás crear las tablas y columnas que albergarán la información de tu negocio.";

  return (
    <Set title="Box icon left description" docs={docs} properties={properties}>
      <BoxIconLeft
        icon={<AdminIcon />}
        variant={1}
        title={title}
        description={description}
      />
    </Set>
  );
}
