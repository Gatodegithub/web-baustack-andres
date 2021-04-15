import SetBlock, {
  SetTitle,
  SetDescription,
  SetFeatureList,
  SetExemple,
} from "@lib/Utils/SetBlock";
import BoxDescription from "@components/Atoms/TextBox/BoxIcon/BoxIconTop";
import {DatabaseIcon} from "@components/SVG";

export default function BoxDescriptionSet() {
  const list = [
    {
      icon: <DatabaseIcon />,
      title: "Crea tu sistema de información",
      description:
        "Crear tu sistema de gestión a medida, generando tablas e indicando los campos de información que requiere tu proceso de negocio.",
    },
  ];
 
  return (
    <SetBlock>
      <SetTitle>Box description</SetTitle>
      <SetDescription>Box para las descripciones</SetDescription>
      <SetFeatureList>
        <ul>
          <li>
            Acepta 3 propiedades:
            <b>"icono(solo svg)", "titulo", "descripción"</b>
          </li>
        </ul>
      </SetFeatureList>
      <SetExemple>
        {list.map((el) => (
          <BoxDescription
            icon={el.icon}
            title={el.title}
            description={el.description}
          />
        ))}
      </SetExemple>
    </SetBlock>
  );
}
