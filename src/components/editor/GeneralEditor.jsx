import { generalAttributes } from 'src/data/inputsAttributes';
import { mergeInputsAttributes } from 'src/utilities';

import EditorToggler from 'components/editor/EditorToggler';
import EditorSection from 'components/editor/EditorSection';

import 'styles/components/editor/GeneralEditor.css';

function GeneralEditor({ credentials, handleChange, handleToggle, isOpen }) {
  const inputsAttributes = mergeInputsAttributes(
    generalAttributes,
    credentials,
    handleChange
  );

  const editor = <EditorSection inputsAttributes={inputsAttributes} />;

  return (
    <fieldset className="general-editor">
      <EditorToggler
        isOpen={isOpen}
        handleToggle={handleToggle}
        title="Personal"
      />
      <div className={!isOpen ? 'general-editor__editor--hidden' : ''}>
        {editor}
      </div>
    </fieldset>
  );
}

export default GeneralEditor;
