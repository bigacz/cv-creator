import 'styles/components/shared/ConfirmModal.css';

import { useState } from 'react';

function ConfirmModal({
  handleConfirm,
  buttonText = 'Do something',
  questionText = 'Are you sure?',
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

  const modal = (
    <div>
      <p>{questionText}</p>
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
