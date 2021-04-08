import Set from '@lib/Utils/Set';
import ActionButton from '@components/Buttons/Action/ActionButton';


export default function ActionButtonSet() {
  const docs = <p>Botones primarios de acción, llamativos, para formularios, call to action, etc...</p>
  const properties = <ul>
  <li>Se puede comportar como submit, trigger de función, enlace de ReactRouter y enlace externo.</li>
  <li>Acepta 3 propiedades: <b>"type", "href" y "onClick"</b>.
    <ol>
      <li><b>Type:</b> "button", "submit" para botones. Si recibe "undefined", por defecto setea "button".</li>
      <li><b>Href:</b> mantiene la apariencia de botón, sin embargo, es un enlace (hereda de Link o {"<a>"}), si recibe un enlace relativo, se le delega a ReactRouter, por ejemplo, '/about'. Si recibe un url absoluto, se delega a un enlace externo.</li>
      <li><b>onClick:</b> para type "button" o "submit", es el callback "onClick".</li>
    </ol>
  </li>
</ul>;


  return (
    <Set title="Action Button" docs={docs} properties={properties}>
      <ActionButton onClick={() => alert('Click')}>onClick</ActionButton>
      <ActionButton href={'/'}>Enlace React</ActionButton>
      <ActionButton href={'http://google.com'}>Enlace externo</ActionButton>
      <form action="" method="get">
      <ActionButton type="submit">Submit</ActionButton>
      </form>
    </Set>
  )
}
