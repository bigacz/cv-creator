import 'styles/components/editor/FlexInputList.css';

function FlexInputList({ entries, handleChange, handleAdd, handleRemove }) {
  const isRemoveButtonAdded = entries.length > 1;

  const listItems = entries.map((entry) => {
    const { id, value } = entry;

    return (
      <li key={id}>
        <input
          type="text"
          value={value}
          onChange={(event) => {
            handleChange(id, event.target.value);
          }}
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
      <button
        className="flex-input-list__add button"
        type="button"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
}

export default FlexInputList;
