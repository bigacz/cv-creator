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
            Remove
          </button>
        )}
      </li>
    );
  });

  return (
    <ul>
      {listItems}
      <button type="button" onClick={handleAdd}>
        +
      </button>
    </ul>
  );
}

export default FlexInputList;
