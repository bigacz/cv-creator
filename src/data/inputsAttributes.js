const date = new Date();
const currentYear = date.getFullYear();

const generalAttributes = {
  first: {
    name: 'first',
    type: 'text',
    labelTitle: 'First name',
    width: 1,
    minLength: 1,
    maxLength: 20,
  },
  last: {
    name: 'last',
    type: 'text',
    labelTitle: 'Last name',
    width: 1,
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

Object.freeze(generalAttributes);
Object.freeze(experienceAttributes);
Object.freeze(educationAttributes);

export { generalAttributes, experienceAttributes, educationAttributes };
