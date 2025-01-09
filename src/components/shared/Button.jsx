import 'styles/components/shared/Button.css';

/**
 * @param {'regular'|'add'|'remove'} buttonType
 */

const defaultTexts = {
  regular: 'Button',
  remove: 'Remove',
  add: 'Add',
};

function Button({
  handleClick,
  buttonType = 'regular',
  text = defaultTexts[buttonType],
  className,
  ...htmlAttributes
}) {
  let buttonClasses = ['button', `button--${buttonType}`];

  if (className != null) {
    buttonClasses.push(className);
  }

  buttonClasses = buttonClasses.join(' ');

  return (
    <button
      onClick={handleClick}
      className={buttonClasses}
      type="button"
      {...htmlAttributes}
    >
      {text}
    </button>
  );
}

export default Button;
