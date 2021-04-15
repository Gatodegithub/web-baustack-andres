import BoxIconCheck from "@components/Atoms/TextBox/BoxIcon/BoxIconCheck";

const title = 'Box Icon Check';

const description = 'caja de texto sin titulo y con icono a la izquierda';

const features = <ul>
  <li>
    Acepta 1 propiedades: <b>"description"</b>.
    <ol>
      <li>
        <b>Description:</b> recibe una descripción.
      </li>
    </ol>
  </li>
</ul>;

const exemple = <>
  <BoxIconCheck description="The administrator profile will have access to all the functionalities of the system."/>
</>

export default {title, description, features, exemple}
