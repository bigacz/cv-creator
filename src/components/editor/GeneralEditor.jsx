import 'styles/components/editor/GeneralEditor.css';

function GeneralEditor({ credentials, handleChange }) {
  const { first, last, email, phone } = credentials;

  return (
    <fieldset>
      <label>
        <span>First name:</span>
        <input
          type="text"
          value={first}
          onChange={(event) => {
            handleChange('first', event);
          }}
        />
      </label>
      <label>
        <span>Last name:</span>
        <input
          type="text"
          value={last}
          onChange={(event) => {
            handleChange('last', event);
          }}
        />
      </label>
      <label>
        <span>E-mail:</span>
        <input
          type="email"
          value={email}
          onChange={(event) => {
            handleChange('email', event);
          }}
        />
      </label>
      <label>
        <span>Phone number:</span>
        <input
          type="tel"
          value={phone}
          onChange={(event) => {
            handleChange('phone', event);
          }}
        />
      </label>
    </fieldset>
  );
}

export default GeneralEditor;
