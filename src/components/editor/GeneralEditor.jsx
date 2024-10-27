function GeneralEditor({ credentials, handleChange }) {
  const { first, last, email, phone } = credentials;

  return (
    <fieldset>
      <label>
        First name:
        <input
          type="text"
          value={first}
          onChange={(event) => {
            handleChange('first', event);
          }}
        />
      </label>
      <label>
        Last name:
        <input
          type="text"
          value={last}
          onChange={(event) => {
            handleChange('last', event);
          }}
        />
      </label>
      <label>
        E-mail:
        <input
          type="email"
          value={email}
          onChange={(event) => {
            handleChange('email', event);
          }}
        />
      </label>
      <label>
        Phone number:
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
