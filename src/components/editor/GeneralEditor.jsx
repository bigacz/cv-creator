import 'styles/components/editor/GeneralEditor.css';

function GeneralEditor({ credentials, handleChange }) {
  const { first, last, email, phone } = credentials;

  return (
    <fieldset className="general-editor">
      <h2 className="general-editor__header">Personal</h2>
      <label className="label-input--regular">
        <span>First name:</span>
        <input
          type="text"
          value={first}
          onChange={(event) => {
            handleChange('first', event);
          }}
        />
      </label>
      <label className="label-input--regular">
        <span>Last name:</span>
        <input
          type="text"
          value={last}
          onChange={(event) => {
            handleChange('last', event);
          }}
        />
      </label>
      <label className="general-editor__email label-input--regular">
        <span>E-mail:</span>
        <input
          type="email"
          value={email}
          onChange={(event) => {
            handleChange('email', event);
          }}
        />
      </label>
      <label className="general-editor__phone label-input--regular">
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
