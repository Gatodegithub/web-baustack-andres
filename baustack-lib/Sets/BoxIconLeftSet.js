import SetBlock, {
  SetTitle,
  SetDescription,
  SetFeatureList,
  SetExemple,
} from "@lib/Utils/SetBlock";
import BoxIconLeft from "@components/Atoms/TextBox/BoxIcon/BoxIconLeft";
import AdminIcon from "@components/SVG/AdminIcon";

export default function BoxDescriptionSet() {
  const params = [
    {
      svgComponent: <AdminIcon />,
      variant: 1,
      title: "Sistema autoadministrable",
      description:
        "Al iniciar la configuración podrás crear las tablas y columnas que albergarán la información de tu negocio.",
    },
  ];

  return (
    <SetBlock>
      <SetTitle>Box icon left description</SetTitle>
      <SetDescription>
        Box con icono a la izquierda y descripción
      </SetDescription>
      <SetFeatureList>
        <ul>
          <li>
            Acepta 4 propiedades:{" "}
            <b>svgComponent, variant, title, description</b>
            <ol>
              <li>
                <b>svgComponent</b>: recibe un SVG como componente React.
              </li>
              <li>
                <b>variant</b>: variante de color del ícono. Es un entero,
                valores entre 1 y 4.
              </li>
              <li>
                <b>title</b>: el título del box.
              </li>
              <li>
                <b>description</b>: descripción del box.
              </li>
            </ol>
          </li>
        </ul>
      </SetFeatureList>
      {params.map((el) => (
        <BoxIconLeft
          svgComponent={el.svgComponent}
          variant={el.variant}
          title={el.title}
          description={el.description}
        />
      ))}
    </SetBlock>
  );
}
