const date = new Date();
const currentYear = date.getFullYear();

const generalAttributes = {
  first: {
    name: 'first',
    type: 'text',
    labelTitle: 'First name',
    width: 'resizable',
    minLength: 1,
    maxLength: 20,
  },
  last: {
    name: 'last',
    type: 'text',
    labelTitle: 'Last name',
    width: 'resizable',
    minLength: 1,
    maxLength: 20,
  },
  email: {
    name: 'email',
    type: 'email',
    labelTitle: 'E-mail',
    minLength: 3,
    maxLength: 40,
  },
  phone: {
    name: 'phone',
    type: 'tel',
    labelTitle: 'Phone number',
    minLength: 2,
    maxLength: 18,
    pattern: '^[\\d\\+][\\d\\s]+$',
    title: 'Use two or more numbers only.',
  },
};

const experienceAttributes = {
  companyName: {
    name: 'companyName',
    type: 'text',
    labelTitle: 'Company name',
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  positionTitle: {
    name: 'positionTitle',
    type: 'text',
    labelTitle: 'Position title',
    minLength: 2,
    maxLength: 20,
  },
  responsibilities: {
    labelTitle: 'Responsibilities',
  },
  yearStarted: {
    name: 'yearStarted',
    type: 'number',
    labelTitle: 'Year started',
    width: 1,
    min: currentYear - 100,
    max: currentYear,
  },
  yearEnded: {
    name: 'yearEnded',
    type: 'number',
    labelTitle: 'Year ended',
    placeholder: 'Present',
    width: 1,
    min: currentYear - 100,
    max: currentYear,
  },
  isActive: {
    name: 'isActive',
    type: 'checkbox',
    labelTitle: 'Current',
    column: 2,
  },
};

const educationAttributes = {
  schoolName: {
    name: 'schoolName',
    type: 'text',
    labelTitle: 'School name',
    minLength: 2,
    maxLength: 60,
  },
  studyTitle: {
    name: 'studyTitle',
    type: 'text',
    labelTitle: 'Title of study',
    minLength: 2,
    maxLength: 30,
  },
  yearStarted: {
    name: 'yearStarted',
    type: 'number',
    labelTitle: 'Year started',
    width: 1,
    min: currentYear - 100,
    max: currentYear,
  },
  yearEnded: {
    name: 'yearEnded',
    type: 'number',
    labelTitle: 'Year ended',
    placeholder: 'Present',
    width: 1,
    min: currentYear - 100,
    max: currentYear,
  },
  isActive: {
    name: 'isActive',
    type: 'checkbox',
    labelTitle: 'Current',
    column: 2,
  },
};

Object.values(generalAttributes).forEach((element) => {
  element['data-editor'] = 'general';
});

Object.values(experienceAttributes).forEach((element) => {
  element['data-editor'] = 'experience';
});

Object.values(educationAttributes).forEach((element) => {
  element['data-editor'] = 'education';
});

[generalAttributes, experienceAttributes, educationAttributes].forEach(
  (element) => {
    Object.values(element).forEach((value) => {
      Object.freeze(value);
    });

    Object.freeze(element);
  }
);

export { generalAttributes, experienceAttributes, educationAttributes };
