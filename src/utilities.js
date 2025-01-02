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

function printPdf(element) {
  const elementCopy = element.cloneNode(true);

  const newWindow = window.open();

  const html = document.createElement('html');
  const head = document.head.cloneNode(true);
  const body = document.createElement('body');

  body.appendChild(elementCopy);

  html.appendChild(head);
  html.appendChild(body);

  newWindow.document.write(html.innerHTML);

  newWindow.document.close();

  newWindow.print();

  newWindow.close();
}

export { mergeInputsAttributes, isYearWithinRange, printPdf };
