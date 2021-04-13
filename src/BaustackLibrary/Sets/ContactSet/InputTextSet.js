import InputText from '@components/Contact/Inputs/InputText';

const title = 'Input contact form';

const description = 'Input para el formulario de contacto';

const features = (
  <ul>
    <li>
      Acepta 5 propiedades: <b>"labelText", "name", "id", "type"</b>.
      <ol>
        <li>
          <b>LabelText:</b> Texto descriptivo del input.
        </li>
        <li>
          <b>Name:</b> nombre del input.
        </li>
        <li>
          <b>Id:</b> id del input.
        </li>
        <li>
          <b>Type:</b> tipo de input.
        </li>
      </ol>
    </li>
  </ul>
);

const params = [
  {
    labelText: 'Nombre',
    name: 'nombre',
    id: 'nombre',
    type: 'text',
  },
];

const exemple = (
  <>
    {params.map((el) => (
      <InputText
        labelText={el.labelText}
        name={el.name}
        id={el.id}
        type={el.type}
      />
    ))}
  </>
);

export default { title, description, features, exemple };
