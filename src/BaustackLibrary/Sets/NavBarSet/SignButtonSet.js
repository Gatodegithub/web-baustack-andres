import SignButton from '@components/NavBar/SignButtons/SignButton';

const title = 'Sign Buttons Navbar';

const description = 'Menú Buttons';

const features = (
  <ul>
    <li>
      Acepta 2 propiedades: <b>"firstHref", "secondHref"</b>.
      <ol>
        <li>
          <b>firstHref:</b> href correspondiente al signup.
        </li>
        <li>
          <b>secondHref:</b> href correspondiente al login.
        </li>
      </ol>
    </li>
  </ul>
);

const exemple = (
  <>
    <SignButton firstHref="/signup" secondHref="/signup" />
  </>
);

export default { title, description, features, exemple };
