import ActionButtonSet from "baustack-lib/Sets/ActionButtonSet";
import BoxDescriptionSet from "baustack-lib/Sets/BoxDescriptionSet";
import BoxIconLeft from "baustack-lib/Sets/BoxIconLeftSet";
import HeroSet from "baustack-lib/Sets/HeroSet";
import styles from "@lib/Library.module.scss";

const DOCS = () => (
  <div className={styles.Header}>
    <h1>Librería Baustack</h1>
    <div>
      <p>
        Se solicita seguir las siguientes buenas prácticas para la librería:
      </p>
      <ol>
        <li>
          Se crea un Set en "baustack-lib/Sets" y se importa desde
          @lib/Utils/Set (ruta absoluta).
        </li>
        <li>
          El compontent Set recibe 3 atributos: title, docs, properties:
          <ul>
            <li>
              <b>title</b>: el título del conjunto, nombre del componente.
            </li>
            <li>
              <b>docs</b>: la descripción del componente, casos de uso,
              variantes, qué resuelve, etc.
            </li>
            <li>
              <b>properties</b>: se describen propiedades del componente,
              métodos, argumentos que recibe, etc. Debe ser una lista, {"<ol>"}{" "}
              o {"<ul>"}
            </li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
);

export default function LibreriaIndex() {
  return (
    <>
      <div style={{ backgroundColor: "rgb(193, 61, 122)" }}>
        <DOCS />
      </div>
      <ActionButtonSet />
      <BoxDescriptionSet />
      <HeroSet />
      <BoxIconLeft />
    </>
  );
}
