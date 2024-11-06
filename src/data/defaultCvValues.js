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
  isEnded: false,
};

const defaultDuty = { id: 0, value: '' };

const defaultJob = {
  id: 0,
  companyName: '',
  positionTitle: '',
  duties: [{ ...defaultDuty }],
  yearStarted: '',
  yearEnded: '',
  isEnded: false,
};

export { defaultCredentials, defaultSchool, defaultJob, defaultDuty };
