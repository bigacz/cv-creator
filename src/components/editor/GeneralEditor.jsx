import { useState } from 'react';

import EditorSectionButton from 'components/editor/EditorSectionButton';

import 'styles/components/editor/GeneralEditor.css';

function GeneralEditor({ credentials, handleChange }) {
  const { first, last, email, phone } = credentials;

  const [isOpen, setIsOpen] = useState(true);

  function toggleEditor() {
    setIsOpen(!isOpen);
  }

  const fieldset = (
    <fieldset className="general-editor__fieldset">
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
      <label className="general-editor__fieldset__email label-input--regular">
        <span>E-mail:</span>
        <input
          type="email"
          value={email}
          onChange={(event) => {
            handleChange('email', event);
          }}
        />
      </label>
      <label className="general-editor__fieldset__phone label-input--regular">
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

  return (
    <div className="general-editor">
      <EditorSectionButton
        isOpen={isOpen}
        toggle={toggleEditor}
        title="Personal"
      />
      {isOpen && fieldset}
    </div>
  );
}

export default GeneralEditor;
