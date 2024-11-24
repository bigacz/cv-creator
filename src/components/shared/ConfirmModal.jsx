import 'styles/components/shared/ConfirmModal.css';

import { useState } from 'react';

function ConfirmModal({
  handleConfirm,
  buttonText = 'It will have consequences',
  questionText = 'Perform this action?',
  resultText,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }

  function handleConfirmClick() {
    handleConfirm();
    close();
  }

  const resultParagraph = resultText != null && <p>{resultText}</p>;

  const modal = (
    <div>
      <h3>{questionText}</h3>
      {resultParagraph}
      <button type="button" onClick={close}>
        Cancel
      </button>
      <button type="button" onClick={handleConfirmClick}>
        {buttonText}
      </button>
    </div>
  );

  const button = (
    <button className="button" onClick={open}>
      {buttonText}
    </button>
  );

  return isOpen ? modal : button;
}

export default ConfirmModal;
