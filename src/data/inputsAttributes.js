const generalAttributes = {
  first: {
    name: 'first',
    type: 'text',
    labelTitle: 'First name',
    width: 1,
  },
  last: {
    name: 'last',
    type: 'text',
    labelTitle: 'Last name',
    width: 1,
  },
  email: {
    name: 'email',
    type: 'email',
    labelTitle: 'E-mail',
  },
  phone: {
    name: 'phone',
    type: 'tel',
    labelTitle: 'Phone number',
  },
};

const experienceAttributes = {
  companyName: {
    name: 'companyName',
    type: 'text',
    labelTitle: 'Company name',
    required: true,
    maxLength: 18,
  },
  positionTitle: {
    name: 'positionTitle',
    type: 'text',
    labelTitle: 'Position title',
  },
  responsibilities: {
    labelTitle: 'Responsibilities',
  },
  yearStarted: {
    name: 'yearStarted',
    type: 'number',
    labelTitle: 'Year started',
    width: 1,
  },
  yearEnded: {
    name: 'yearEnded',
    type: 'number',
    labelTitle: 'Year ended',
    width: 1,
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
  },
  studyTitle: {
    name: 'studyTitle',
    type: 'text',
    labelTitle: 'Title of study',
  },
  yearStarted: {
    name: 'yearStarted',
    type: 'number',
    labelTitle: 'Year started',
    width: 1,
  },
  yearEnded: {
    name: 'yearEnded',
    type: 'number',
    labelTitle: 'Year ended',
    width: 1,
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
