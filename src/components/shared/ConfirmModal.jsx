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

  const modalPrefix = 'confirm-modal__wrapper__modal-wrapper__modal';

  const resultNode = resultText && (
    <div className={`${modalPrefix}__result`}>{resultText}</div>
  );

  const modal = (
    <div className="confirm-modal__wrapper__modal-wrapper">
      <div className={modalPrefix}>
        <div className={`${modalPrefix}__header`}>{questionText}</div>
        {resultNode}
        <Button
          text="Cancel"
          handleClick={close}
          className={`${modalPrefix}__cancel`}
        />
        <Button
          text={buttonText}
          handleClick={handleConfirmClick}
          className={`${modalPrefix}__accept`}
        />
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
