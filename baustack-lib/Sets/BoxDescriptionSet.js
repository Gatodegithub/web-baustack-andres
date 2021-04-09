import Set from "@lib/Utils/Set";
import BoxDescription from "@components/TextBox/BoxIconTop/BoxDescription";
import BdIcon from "@components/SVG/BdIcon";

export default function BoxDescriptionSet() {
  const docs = <p>Box para las descripciónes</p>;
  const properties = (
    <ul>
      <li>
        Acepta 3 propiedades: <b>"icono(solo svg)", "titulo", "descripción"</b>
      </li>
    </ul>
  );

  const title = "Crea tu sistema de información",
    description =
      "Crear tu sistema de gestión a medida, generando tablas e indicando los campos de información que requiere tu proceso de negocio.";

  return (
    <Set title="Box description" docs={docs} properties={properties}>
      <BoxDescription
        icon={<BdIcon />}
        title={title}
        description={description}
      />
    </Set>
  );
}
