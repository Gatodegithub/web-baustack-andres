import Set from "@lib/Utils/Set";
import Hero from "@components/Hero/Hero";

export default function BoxDescriptionSet() {
  const docs = <p>Descripción de los heros</p>;
  const properties = (
    <ul>
      <li>
        Acepta 3 propiedades: <b>"título", "descripción", "href"</b>
      </li>
    </ul>
  );

  return (
    <Set title="Hero description" docs={docs} properties={properties}>
      <Hero title="Formato responsivo multiplataforma" description="Baustack está diseñado y pensado para funcionar en cualquier tipo de dispositivo, entre ellos smartphones, tablets y computadores con pantallas de distintos tamaños, en formato horizontal o vertical." />
    </Set>
  );
}
