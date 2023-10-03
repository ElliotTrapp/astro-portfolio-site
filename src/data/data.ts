import bidenImg from '~/assets/images/biden.jpg';
import jiraImg from '~/assets/images/jira.png';
import srlImg from '~/assets/images/srl.jpg';
import ddImg from '~/assets/images/dd.png';
import siteImg from '~/assets/images/site.png';
import domImg from '~/assets/images/dom-cli.png';

// TODO: read in from a yml file

export const experiencesData = [
  //  {
  //    title: "Completed MA in Philosophy",
  //    //institution: "The New School for Social Research",
  //    location: "New York, NY",
  //    description:
  //      "Pursued my passion for logic, language, and ethics at the graduate level",
  //    icon: React.createElement(LuGraduationCap),
  //    date: "2015",
  //  },
  //  {
  //    title: "Simulation Operations Specialist",
  //    //institution: "DePaul University",
  //    location: "Chicago, IL",
  //    description: "Administered DePaul University's nursing simulation lab",
  //    icon: React.createElement(LuGraduationCap),
  //    date: "2018",
  //  },
  {
    title: 'Software and Mission Operations Engineer',
    institution: 'NASA Jet Propulsion Laboratory',
    link: 'https://www.jpl.nasa.gov/',
    location: 'Pasadena, CA',
    description: [
      'Integrated telemetry into M20 landing visualization',
      'Developed and administered an AWS data-lake for 27 engineering teams',
      'Adapted command schemas to meet requirements for the Sample Return Lander(SRL) project',
      'Automated customer service processes through JIRA',
      'Hired, mentored, and managed 4 full-time operations engineers and 3 cohorts of interns',
    ],
    icon: '',
    date: '2019-Present',
  },
  {
    title: 'Software Engineering Intern',
    institution: 'NASA Johnson Space Center',
    link: 'https://www.nasa.gov/centers/johnson/home/index.html',
    location: 'Houston, TX',
    description: [
      'Authored python and MATLAB libraries to automate data cleaning, ingestion, and verification of pupillometery data',
      'Researched the use of machine learning to predict cognitive workload of astronauts',
    ],
    icon: '',
    date: '2018',
  },
  {
    title: 'Software Engineering Intern',
    institution: 'HERE Technologies',
    link: 'https://www.here.com/',
    location: 'Chicago, IL',
    description: [
      'Implemented python modules for model verification and validation',
      'Continued honing my python & C++ skills',
    ],
    icon: '',
    date: '2018',
  },
  {
    title: 'MS in Computer Science',
    institution: 'DePaul University',
    link: 'https://www.depaul.edu/Pages/default.aspx',
    location: 'Chicago, IL',
    description: [
      'Specialized in machine learning and artificial intelligence',
      'After graduating, I immediately found a software engineering internship',
    ],
    icon: '',
    date: '2018',
  },
] as const;

export const projectsData = [
  {
    title: 'Mars 2020 Landing Visualization Development',
    description:
      'Integrated orbiter telemetry into a visualization of the Mars 2020 landing sequence. The President tweeted this picture of him watching our visualization.',
    tags: ['Javascript', 'React'],
    imageUrl: bidenImg,
  },
  {
    title: 'Sample Return Lander (SRL) Flight Software',
    description: 'Developing flight software for the SRL project',
    tags: ['C', 'C++', 'Python', 'Jinja2'],
    imageUrl: srlImg,
  },
  {
    title: 'Operational Cloud Store (OCS) Development',
    description:
      'Developed a data-lake supporting 27 engineering teams across the Mars 2020 and Europa Clipper projects',
    tags: ['Javascript', 'Python', 'AWS', 'Serverless', 'Terraform'],
    imageUrl: ddImg,
  },
  {
    title: 'Distributed Object Manager (DOM) Operations',
    description: 'Lead operational support for the DOM, a distributed object store supporting 12 flight projects',
    tags: ['Python', 'Perl', 'Bash', 'Git'],
    imageUrl: domImg,
  },
  {
    title: 'Automated JIRA Service Desk',
    description: 'Automated customer ticket tracking and work status reporting',
    tags: ['Jira'],
    imageUrl: jiraImg,
  },
  {
    title: 'ElliotTrapp.com',
    description:
      'Designed and developed this portfolio website to teach myself proper web and React development practices in my free time',
    tags: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'Framer Motion'],
    imageUrl: siteImg,
  },
] as const;

export const skillsData = [
  'Python',
  'Javascript',
  'TypeScript',
  'Node.js',
  'Next.js',
  'React',
  'TailwindCSS',
  'AWS',
  'Serverless',
  'Terraform',
  'Ruby',
  'Perl',
  'SQL',
  'Docker',
  'Puppet',
  'Tensorflow',
  'Keras',
  'NumPy',
  'Pandas',
  'Scikit-learn',
  'Jupyter Notebooks',
  'Git',
  'HTML',
  'CSS',
] as const;
