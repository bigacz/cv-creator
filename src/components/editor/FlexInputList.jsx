import 'styles/components/editor/FlexInputList.css';

import Button from 'components/shared/Button';

function FlexInputList({
  entries,
  handleChange,
  handleAdd,
  handleRemove,
  ...attributes
}) {
  const isRemoveButtonAdded = entries.length > 1;

  const listItems = entries.map((entry) => {
    const { id, value } = entry;

    return (
      <li key={id} className="flex-input-list__list__item">
        <input
          {...attributes}
          className="flex-input-list__list__item__input"
          type="text"
          name={id}
          value={value}
          onChange={(event) => {
            handleChange(id, event.target.value);
          }}
          required
        />
        {isRemoveButtonAdded && (
          <button
            className="flex-input-list__list__item__remove"
            type="button"
            onClick={() => {
              handleRemove(id);
            }}
          >
            -
          </button>
        )}
      </li>
    );
  });

  return (
    <div className="flex-input-list">
      <ul className="flex-input-list__list">{listItems}</ul>
      <Button
        className="flex-input-list__add"
        handleClick={handleAdd}
        buttonType="add"
      />
    </div>
  );
}

export default FlexInputList;
