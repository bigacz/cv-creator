function mergeInputsAttributes(inputs, values, handleChange) {
  const inputsCopy = structuredClone(inputs);
  const valuesCopy = structuredClone(values);

  Object.values(inputsCopy).forEach((input) => {
    const name = input.name;

    input.value = valuesCopy[name];
    input.handleChange = function (value) {
      handleChange(name, value);
    };
  });

  return inputsCopy;
}

function isYearWithinRange(year) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return year <= currentYear && year >= currentYear - 100;
}

export { mergeInputsAttributes, isYearWithinRange };
