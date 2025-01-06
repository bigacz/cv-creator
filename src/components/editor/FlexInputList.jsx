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
      <li key={id}>
        <input
          {...attributes}
          type="text"
          value={value}
          onChange={(event) => {
            handleChange(id, event.target.value);
          }}
          required
        />
        {isRemoveButtonAdded && (
          <button
            type="button"
            onClick={() => {
              handleRemove(id);
            }}
          >
            x
          </button>
        )}
      </li>
    );
  });

  return (
    <div className="flex-input-list">
      <ul className="flex-input-list__list">{listItems}</ul>
      <Button handleClick={handleAdd} type="add" />
    </div>
  );
}

export default FlexInputList;
