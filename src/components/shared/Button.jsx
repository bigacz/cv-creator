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
  htmlAttributes,
}) {
  let buttonClasses = ['button', `button--${type}`];

  buttonClasses = buttonClasses.join(' ');

  return (
    <button onClick={handleClick} className={buttonClasses} {...htmlAttributes}>
      {text}
    </button>
  );
}

export default Button;
