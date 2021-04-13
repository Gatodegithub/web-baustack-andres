import MenuLink from '@components/NavBar/Links/MenuLink';

const title = 'Navbar Links';

const description = 'Links del Navbar';

const features = (
  <ul>
    <li>
      Este componente es escalable, recibe un array con objetos, el cual tiene
      como propiedades, sectionID, name.
    </li>
    <li>
      Acepta 1 propiedad: <b>"linkArray"</b>.
      <ol>
        <li>
          <b>LinkArray:</b> array con objetos
        </li>
      </ol>
    </li>
  </ul>
);

const exemple = (
  <>
    <MenuLink
      linkArray={[
        {
          sectionID: null,
          name: 'Inicio',
        },
        {
          sectionID: null,
          name: 'Precios',
        },
        {
          sectionID: null,
          name: 'Contacto',
        },
      ]}
    />
  </>
);

export default { title, description, features, exemple };
