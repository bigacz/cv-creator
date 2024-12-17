import { useState } from 'react';

import EditorToggler from 'components/editor/EditorToggler';
import EditorSection from 'components/editor/EditorSection';

import 'styles/components/editor/GeneralEditor.css';

function GeneralEditor({ credentials, handleChange }) {
  const { first, last, email, phone } = credentials;

  const [isOpen, setIsOpen] = useState(true);

  function toggleEditor() {
    setIsOpen(!isOpen);
  }

  const inputsParameters = [
    {
      name: 'first',
      value: first,
      type: 'text',
      labelTitle: 'First name',
      width: 1,
    },
    {
      name: 'last',
      value: last,
      type: 'text',
      labelTitle: 'Last name',
      width: 1,
    },
    {
      name: 'email',
      value: email,
      type: 'email',
      labelTitle: 'E-mail',
    },
    {
      name: 'phone',
      value: phone,
      type: 'tel',
      labelTitle: 'Phone number',
    },
  ];

  inputsParameters.forEach((input) => {
    const name = input.name;

    input.handleChange = function (value) {
      handleChange(name, value);
    };
  });

  const editor = <EditorSection inputsParameters={inputsParameters} />;

  return (
    <fieldset className="general-editor">
      <EditorToggler
        isOpen={isOpen}
        handleToggle={toggleEditor}
        title="Personal"
      />
      {isOpen && <div>{editor}</div>}
    </fieldset>
  );
}

export default GeneralEditor;
