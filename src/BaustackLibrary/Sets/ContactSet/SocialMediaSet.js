import SocialMedia from "@components/Contact/SocialIcon/SocialMedia";

const title = 'Social Media';

const description = 'botones de redes sociales';

const features = <ul>
  <li>
    Es escalable, recibe un array con objetos.
  </li>
  <li>
    Acepta 2 propiedades: <b>"svgComponent", "href"</b>.
    <ol>
      <li>
        <b>SvgComponent:</b> recibe un svg que representa la red social.
      </li>
      <li>
        <b>Href:</b> recibe la dirección a la que el usuario será redireccionado.
      </li>
    </ol>
  </li>
</ul>;

const exemple = <>
  <SocialMedia />
</>

export default {title, description, features, exemple}
