import SetBlock, {
  SetTitle,
  SetDescription,
  SetFeatureList,
  SetExemple,
} from "@lib/Utils/SetBlock";
import Hero from "@components/TextBox/BoxCallToAction/BoxCallToAction";

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


import SetBlock, {
  SetTitle,
  SetDescription,
  SetFeatureList,
  SetExemple,
} from "@lib/Utils/SetBlock";
import ActionButton from "@components/Buttons/Action/ActionButton";

export default function ActionButtonSet() {
  return (
    <SetBlock>
      <SetTitle>Action Button</SetTitle>
      <SetDescription>
        Botones primarios de acción, llamativos, para formularios, call to
        action, etc...
      </SetDescription>
      <SetFeatureList>
        <ul>
          <li>
            Se puede comportar como submit, trigger de función, enlace de
            ReactRouter y enlace externo.
          </li>
          <li>
            Acepta 3 propiedades: <b>"type", "href" y "onClick"</b>.
            <ol>
              <li>
                <b>Type:</b> "button", "submit" para botones. Si recibe
                "undefined", por defecto setea "button".
              </li>
              <li>
                <b>Href:</b> mantiene la apariencia de botón, sin embargo, es un
                enlace (hereda de Link o {"<a>"}), si recibe un enlace relativo,
                se le delega a ReactRouter, por ejemplo, '/about'. Si recibe un
                url absoluto, se delega a un enlace externo.
              </li>
              <li>
                <b>onClick:</b> para type "button" o "submit", es el callback
                "onClick".
              </li>
            </ol>
          </li>
        </ul>
      </SetFeatureList>
      <SetExemple>
        <ActionButton onClick={() => alert("Click")}>onClick</ActionButton>
        <ActionButton href={"/"}>Enlace React</ActionButton>
        <ActionButton href={"http://google.com"}>Enlace externo</ActionButton>
        <form action="" method="get">
          <ActionButton type="submit">Submit</ActionButton>
        </form>
      </SetExemple>
    </SetBlock>
  );
}
