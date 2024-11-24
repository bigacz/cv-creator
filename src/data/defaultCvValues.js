const defaultCredentials = {
  first: '',
  last: '',
  email: '',
  phone: '',
};

const defaultSchool = {
  id: 0,
  schoolName: '',
  studyTitle: '',
  yearStarted: '',
  yearEnded: '',
  isActive: false,
};

const defaultDuty = { id: 0, value: '' };

const defaultJob = {
  id: 0,
  companyName: '',
  positionTitle: '',
  duties: [{ ...defaultDuty }],
  yearStarted: '',
  yearEnded: '',
  isActive: false,
};

export { defaultCredentials, defaultSchool, defaultJob, defaultDuty };
