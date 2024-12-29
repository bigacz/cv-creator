import 'styles/components/shared/Button.css';

/**
 * @param {'regular'|'add'|'remove'} type
 */

const defaultTexts = {
  regular: 'Button',
  remove: 'Remove',
  add: 'Add',
};

function Button({
  handleClick,
  type = 'regular',
  text = defaultTexts[type],
  className,
  htmlAttributes,
}) {
  let buttonClasses = ['button', `button--${type}`];

  if (className != null) {
    buttonClasses.push(className);
  }

  buttonClasses = buttonClasses.join(' ');

  return (
    <button
      onClick={handleClick}
      className={buttonClasses}
      {...htmlAttributes}
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;
