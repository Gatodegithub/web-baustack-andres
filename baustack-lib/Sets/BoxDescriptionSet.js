import Set from '@lib/Utils/Set';
import boxDescription from '@components/Box-description/BoxDescription';

export default function BoxDescriptionSet() {
  const docs = <p>Box de la sección crear, editar y comparte</p>
  const properties = <ul>
  <li>La mayoria de cajas contiene un icono, título, descripción</li>
</ul>;


  return (
    <Set title="Box description" docs={docs} properties={properties}>
      <boxDescription />
    </Set>
  )
}
