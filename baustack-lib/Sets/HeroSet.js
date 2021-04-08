import Set from "@lib/Utils/Set";
import Hero from "@components/Hero/Hero";

export default function BoxDescriptionSet() {
  const docs = <p>Heros con descripción y foto</p>;
  const properties = (
    <ul>
      <li>
        Acepta 3 propiedades: <b>"título", "descripción", "href" y "img"</b>
      </li>
    </ul>
  );

  const title = "Formato responsivo multiplataforma",
    description =
      "Baustack está diseñado y pensado para funcionar en cualquier tipo de dispositivo, entre ellos smartphones, tablets y computadores con pantallas de distintos tamaños, en formato horizontal o vertical.";

  return (
    <Set title="Hero description" docs={docs} properties={properties}>
      <Hero title={title} description={description}/>
    </Set>
  );
}

// Como poner el icono en btn comenzar
