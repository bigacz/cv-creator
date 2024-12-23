import 'styles/components/shared/ConfirmModal.css';

import Button from 'components/shared/Button';
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

  const resultParagraph = resultText && <p>{resultText}</p>;

  const modal = (
    <div className="confirm-modal__wrapper__modal-wrapper">
      <div className="confirm-modal__wrapper__modal-wrapper__modal">
        <h3>{questionText}</h3>
        {resultParagraph}
        <button type="button" onClick={close}>
          Cancel
        </button>
        <button type="button" onClick={handleConfirmClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );

  const button = <Button handleClick={open} text={buttonText} />;

  return (
    <div className="confirm-modal__wrapper">
      {button}
      {isOpen && modal}
    </div>
  );
}

export default ConfirmModal;
