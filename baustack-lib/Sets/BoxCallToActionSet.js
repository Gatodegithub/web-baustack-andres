import SetBlock, {
  SetTitle,
  SetDescription,
  SetFeatureList,
  SetExemple,
} from "@lib/Utils/SetBlock";
import BoxCallToAction from "@components/Atoms/TextBox/BoxIcon/BoxCallToAction";

export default function BoxCallToActionSet() {
  const title = "Formato responsivo multiplataforma",
    description =
      "Baustack está diseñado y pensado para funcionar en cualquier tipo de dispositivo, entre ellos smartphones, tablets y computadores con pantallas de distintos tamaños, en formato horizontal o vertical.";

  return (
    <SetBlock>
      <SetTitle>Box Call-to-action</SetTitle>
      <SetDescription>
        Box de texto con botones de call-to-action
      </SetDescription>
      <SetFeatureList>
        <ul>
          <li>
            Acepta 3 propiedades: <b>"título", "descripción", "href" y "img"</b>
          </li>
        </ul>
      </SetFeatureList>
      <SetExemple>
        <BoxCallToAction title={title} description={description} callToAction="Comenzar"/>
      </SetExemple>
    </SetBlock>
  );
}
