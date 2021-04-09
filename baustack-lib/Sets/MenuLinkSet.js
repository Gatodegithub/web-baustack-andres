import Set from "@lib/Utils/Set";
import MenuLink from "@components/NavBar/Links/MenuLink";

export default function MenuLinkSet() {
  const docs = <p>Links correspondientes al menú, cada propiedad representa el link ya predefinido en el componente</p>;
  const properties = (
    <ul>
      <li>
        Acepta 3 propiedades: <b>"firstHref", "secondHref", "thirdHref"</b>
      </li>
    </ul>
  );

  return (
    <Set title="Menú links" docs={docs} properties={properties}>
      <MenuLink
        linkArray={[{
          sectionID: null,
          name: 'Inicio'
        },
        {
          sectionID: null,
          name: 'Precios'
        },
        {
          sectionID: null,
          name: 'Contacto'
        }]}

      />
    </Set>
  );
}
