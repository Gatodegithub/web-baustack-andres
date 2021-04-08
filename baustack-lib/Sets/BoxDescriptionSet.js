import Set from "@lib/Utils/Set";
import BoxDescription from "@components/Box-icontop/BoxDescription";

export default function BoxDescriptionSet() {
  const docs = <p>Box para las descripciónes</p>;
  const properties = (
    <ul>
      <li>
        Acepta 3 propiedades: <b>"icono(solo svg)", "titulo", "descripción"</b>
      </li>
    </ul>
  );

  return (
    <Set title="Box description" docs={docs} properties={properties}>
      <BoxDescription
        icon={
          <path d="M12 12c4.703 0 9.422-0.844 12-2.656v2.656c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2.656c2.578 1.813 7.297 2.656 12 2.656zM12 24c4.703 0 9.422-0.844 12-2.656v2.656c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2.656c2.578 1.813 7.297 2.656 12 2.656zM12 18c4.703 0 9.422-0.844 12-2.656v2.656c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2.656c2.578 1.813 7.297 2.656 12 2.656zM12 0c6.625 0 12 1.797 12 4v2c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2c0-2.203 5.375-4 12-4z"></path>
        }
        title="Crea tu sistema de información"
        description="Crear tu sistema de gestión a medida, generando tablas e indicando los campos de información que requiere tu proceso de negocio."
      />
    </Set>
  );
}
