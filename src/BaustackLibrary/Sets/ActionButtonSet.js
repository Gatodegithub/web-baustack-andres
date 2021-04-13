import ActionButton from "@components/Buttons/Action/ActionButton";

const title = 'Action Button';

const description = 'Botones primarios de acción, llamativos, para formularios, call to action, etc...';

const features = <ul>
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
</ul>;

const exemple = <>
  <ActionButton onClick={() => alert("Click")}>onClick</ActionButton>
  <ActionButton href={"/"}>Enlace React</ActionButton>
  <ActionButton href={"http://google.com"}>Enlace externo</ActionButton>
  <form action="" method="get">
    <ActionButton type="submit">Submit</ActionButton>
  </form>
</>

export default {title, description, features, exemple}
