const placeholderCredentials = {
  first: 'Larry',
  last: 'Erickson',
  email: 'LarryLErickson@jourrapide.com',
  phone: '765 893 923',
};

const placeholderSchools = [
  {
    id: 0,
    schoolName: 'Springfield High School',
    studyTitle: 'High School Diploma',
    yearStarted: '2005',
    yearEnded: '2009',
    isActive: false,
  },
  {
    id: 2,
    schoolName: 'Global Business Academy',
    studyTitle: 'Master of Business Administration (MBA)',
    yearStarted: '2016',
    yearEnded: '2018',
    isActive: false,
  },
  {
    id: 5,
    schoolName: 'Placeholder Art School',
    studyTitle: 'Diploma in Graphic Design',
    yearStarted: '2019',
    yearEnded: '',
    isActive: true,
  },
];

const placeholderJobs = [
  {
    id: 2,
    companyName: 'NextGen Solutions',
    positionTitle: 'Project Manager',
    duties: [
      {
        id: 0,
        value:
          'Developed and maintained project documentation, including risk assessments, progress reports, and final deliverables, ensuring transparency and accountability throughout the project lifecycle.',
      },
      { id: 2, value: 'Managed a team of 10 developers and designers.' },
      {
        id: 5,
        value:
          'Monitored and managed project budgets, making adjustments as necessary to meet objectives without compromising quality or performance.',
      },
    ],
    yearStarted: '2018',
    yearEnded: '2021',
    isActive: false,
  },
  {
    id: 4,
    companyName: 'Data Insight LLC',
    positionTitle: 'Data Analyst',
    duties: [
      {
        id: 1,
        value: 'Analyzed and visualized large data sets for key insights.',
      },
      {
        id: 2,
        value:
          'Collaborated with cross-functional teams to understand business needs, identifying key performance indicators (KPIs) to inform strategic decision-making.',
      },

      { id: 4, value: 'Prepared detailed reports for stakeholders.' },
      {
        id: 5,
        value:
          'Maintained and updated large-scale databases, ensuring data accuracy and consistency, while developing automated processes to streamline data entry and reporting.',
      },
    ],
    yearStarted: '2017',
    yearEnded: '2019',
    isActive: false,
  },
  {
    id: 5,
    companyName: 'Global Outreach Services',
    positionTitle: 'Marketing Specialist',
    duties: [
      {
        id: 1,
        value:
          'Developed and executed comprehensive marketing campaigns across digital channels, including email, social media, and paid advertising, to boost brand awareness and customer engagement.',
      },
      { id: 2, value: 'Monitored and analyzed campaign performance metrics.' },
      {
        id: 3,
        value:
          'Conducted market research to identify emerging trends, customer preferences, and competitive landscapes, shaping the direction of future marketing initiatives.',
      },
      {
        id: 5,
        value:
          'Managed content creation, overseeing the production of high-quality, engaging content for blog posts, newsletters, and promotional materials that aligned with brand messaging.',
      },
      {
        id: 7,
        value:
          'Developed and maintained customer personas to inform targeted marketing campaigns, optimizing content and messaging for specific audience segments.',
      },
    ],
    yearStarted: '2020',
    yearEnded: '',
    isActive: true,
  },
];

export { placeholderCredentials, placeholderSchools, placeholderJobs };
