import { useState } from 'react';

function ConfirmModal({
  confirmHandler,
  buttonText = 'Do something',
  questionText = 'Are you sure?',
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  function handleOpen() {
    setIsOpen(true);
  }

  const modal = (
    <div>
      <p>{questionText}</p>
      <button type="button" onClick={handleClose}>
        Cancel
      </button>
      <button type="button" onClick={confirmHandler}>
        {buttonText}
      </button>
    </div>
  );

  const button = <button onClick={handleOpen}>{buttonText}</button>;

  return isOpen ? modal : button;
}

export default ConfirmModal;
