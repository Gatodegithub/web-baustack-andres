import BoxCallToAction from '@components/TextBox/BoxIcon/BoxCallToAction';

const title = 'Box Call To Action';

const description = 'Box de texto con boton de call-to-action';

const features = <ul>
  <li>
    Acepta 4 propiedades: <b>"title", "description", "href" y "callToAction"</b>.
    <ol>
      <li>
        <b>Title:</b> recibira el titulo de la caja.
      </li>
      <li>
        <b>Description:</b> recibira la descripción de la caja.
      </li>
      <li>
        <b>Href:</b> recibe el path deseado
      </li>
      <li>
        <b>CallToAction:</b> recibe el texto que se mostara al lado del boton
      </li>
    </ol>
  </li>
</ul>;

const exemple = (
  <>
    <BoxCallToAction
      title="Responsive"
      description="Baustack is designed and thought to work on any type of device, including smartphones, tablets and computers with different screen sizes, in landscape or portrait format."
      href="#"
      callToAction="Comenzar"
    />
  </>
);

export default { title, description, features, exemple };
