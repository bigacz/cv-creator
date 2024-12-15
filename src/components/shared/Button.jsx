import 'styles/components/shared/Button.css';

/**
 * @param {'regular'|'add'|'remove'} type
 */

function Button({
  handleClick,
  text = 'Button',
  type = 'regular',
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
