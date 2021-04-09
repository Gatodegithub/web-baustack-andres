import Set from "@lib/Utils/Set";
import SignButton from "@components/NavBar/SignButtons/SignButton";

export default function BoxDescriptionSet() {
  const docs = <p>Menú buttons</p>;
  const properties = (
    <ul>
      <li>
        Acepta 2 propiedades: <b>"firstHref", "secondHref"</b>
      </li>
    </ul>
  );

  return (
    <Set title="Box icon left description" docs={docs} properties={properties}>
      <SignButton firstHref="/signup" secondHref="/signup" />
    </Set>
  );
}
