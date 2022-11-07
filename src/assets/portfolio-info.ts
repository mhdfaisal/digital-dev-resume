import {
  IBioData,
  SkillTags,
  ISocialMediaLinks,
  WorkExperiences,
  EducationInfo,
} from './portfolio-info.types';

// Bio Data Section
const bioData: IBioData = {
  aboutMe: [
    'My daily routine involves the development of highly efficient and robust applications that simplify business problems. I enjoy working in a startup culture and love to take product ownership while working, and also challenging my abilities along with helping and motivating my teammates to meet strict requirements and deadlines.',
    'I like to solve challenges and keep myself up to date with the cutting edge technologies.',
  ],
  recentChallengeSolved:
    'In my recent employment organization, I faced my most challenging job of creating third party embed JavaScript widgets which were intended to be configured by the clients using our dashboard and to be placed on their websites for reputation management. I was solely responsible for the accomplishment of this task, starting from scratch. It was a new thing for me since in the past I had already created some static JavaScript widgets but this time they were highly dynamic and with hell lot of configurations and also the challenge of making them appear the same on every client systems. To overcome this challenge I did some research by going through online resources and books (Third party Js etc) and finally reverse engineering the widgets of some competitors who were already doing something that we were trying to achieve. Finally, I was able to code the widget bootstrap script and also the widgets themselves and made them highly configurable by creating a widget management module inside the dashboard. Those widgets are still live and working and loved by the clients for displaying their reputations on their platforms.',
  bioTagLine:
    "Whether you're looking to hire an eager self-starter or build your network, I'd love to hear your story.",
  resumeDownloadLink:
    'https://drive.google.com/file/d/11DTj5WnaARsIIai-fK4zHS9cMf0lDxPl/view?usp=sharing',
  meetingSchedulerLink: 'https://calendly.com/fmohd195/30min',
};

// skill tags displayed in Bio section
const skillTags: SkillTags = [
  { id: 1, name: 'JavaScript', backgroundColor: '#F0DB4F', fontColor: '#000' },
  { id: 2, name: 'Es6+', backgroundColor: '#F0DB4F', fontColor: '#000' },
  { id: 3, name: 'TypeScript', backgroundColor: '#007ACC', fontColor: '#fff' },
  { id: 4, name: 'React Js', backgroundColor: '#5ED4F3', fontColor: '#000' },
  { id: 5, name: 'Redux', backgroundColor: '#785ABC', fontColor: '#fff' },
  { id: 6, name: 'Next Js', backgroundColor: '', fontColor: '' },
  { id: 7, name: 'Meteor Js', backgroundColor: '#DF4F4F', fontColor: '#fff' },
  { id: 8, name: 'Web Sockets', backgroundColor: '', fontColor: '' },
  { id: 9, name: 'Node Js', backgroundColor: '#68A063', fontColor: '#fff' },
  { id: 10, name: 'Express', backgroundColor: '#8CC84B', fontColor: '#fff' },
  { id: 11, name: 'MongoDB', backgroundColor: '', fontColor: '' },
  { id: 12, name: 'GraphQL', backgroundColor: '#E863AB', fontColor: '#fff' },
  { id: 13, name: 'Firebase', backgroundColor: '', fontColor: '' },
  { id: 14, name: 'Docker', backgroundColor: '#2EB2E6', fontColor: '#fff' },
  { id: 15, name: 'CI/CD', backgroundColor: '', fontColor: '' },
  { id: 16, name: 'HTML', backgroundColor: '', fontColor: '' },
  { id: 17, name: 'CSS', backgroundColor: '', fontColor: '' },
  { id: 18, name: 'Sass', backgroundColor: '#CD6799', fontColor: '#fff' },
  {
    id: 19,
    name: 'Material Design',
    backgroundColor: '',
    fontColor: '',
  },
  {
    id: 20,
    name: 'Schema Design',
    backgroundColor: '#E863AB',
    fontColor: '#fff',
  },
  {
    id: 21,
    name: 'AWS',
    backgroundColor: '#DF4F4F',
    fontColor: '#fff',
  },
  {
    id: 22,
    name: 'Deployment',
    backgroundColor: '',
    fontColor: '',
  },
  {
    id: 23,
    name: 'PubSub',
    backgroundColor: '',
    fontColor: '',
  },
  {
    id: 24,
    name: 'ORMs',
    backgroundColor: '#68A063',
    fontColor: '#fff',
  },
];

// social media links
const socialMediaLinks: ISocialMediaLinks = {
  github: 'https://github.com/mhdfaisal/',
  email: 'fmohd195@gmail.com',
  mailToLink: 'mailto:fmohd195@gmail.com',
  telephoneLink: 'tel:+91-9005809583',
  telephone: '+91-9005809583',
  linkedIn: 'https://www.linkedin.com/in/mohdfaisal9005/',
  twitter: 'https://twitter.com/MohdFaisal9005',
  facebook: false,
  instagram: false,
  medium: false,
  skype: 'live:7ff348f368d1eda6',
};

// work experience section
const workExperiences: WorkExperiences = [
  {
    role: 'Sr. Fullstack Engineer (Remote)',
    companyName: 'Ohceans Pte Ltd, Singapore',
    companyLogo: `${process.env.PUBLIC_URL}/images/ohceans.png`,
    duration: 'August 2020 - Present',
    description:
      'Leading the development of products that automate the processes in the shipping industry to optimise port call operations, automate digital crew certification verifications, behavior based safety inspection softwares, remote survey and audit tools and simplifying vessel chartering for both hirers and vessel providers by building and delivering innovative and effective solutions.',
    descriptionBullets: [
      'Simplified shipment business problems using modern technologies',
      'Developed a reactive Web Application using Meteor Js for shipment port call optimizations',
      'Reduced numerous man-hours spent manually updating shipment information',
      'Optimized Meteor mongo subscriptions for efficient querying and reduced size of mini mongo at client level',
      ' Lead the development of a product to automate crew certificate verification. Replaced the time consuming mechanical checking method with and automated solution that confirms the authenticity of each certificate against National Authorities’ databases line by line and generated an automated report with highest accuracy rate. The reports generated bear the company letterhead and can be downloaded in the pdf format. Technologies used - (Node.js, MongoDB, TagUI, Puppeteer, React.js, Redux).',
      'Lead the development of the Behavior Based Safety Software for the shipping industry. Enabled crew members to to report observations, unsafe and at-risk behaviors and conditions with simple to use software, available on any device. Adapted BBS checklists to align with each workers job role, site and tasks. Connected the field to the boardroom to truly understand the underlying causes of reported safety observations from crew members. Automated processes that are manual, repetitive or require consistent follow-ups or closeouts.',
      'Lead the design, development and deployment of a remote audit progressive web application for crews and shore managers. Allowed creation of dynamic audit forms, supported caching and offline submissions of audit forms using background syncs. Facilitated quick approval, rejections and closeouts of the audit submissions.',
      'Currently managing a team of 4 and leading the development of a Vessel Chartering application that supports instant vessel matching from a central pool of vessel providers for hiring by cargo providers.',
      'Tools: JavaScript, TypeScript, React Js, React Query, Next Js, Material UI, Node Js, Docker, Amazon Web Services (AWS), Continuous Integration and Continuous Delivery (CI/CD), Deployment, Schema Design, Pub Sub, Meteor Js, WebSocket, GraphQL, GraphQL Subscriptions, Redis, S3, Testing, Jest, Enzyme',
    ],
  },
  {
    role: 'Software Engineer Frontend (Remote)',
    companyName: 'TrustSearch Ltd, Riga, Latvia',
    companyLogo: `${process.env.PUBLIC_URL}/images/trustsearch-logo.png`,
    duration: 'July 2019 - July 2020',
    description:
      'Develop an application where - Internet users check online reputation of websites, but website owners build trustworthiness online.',
    descriptionBullets: [
      'Building architecture for UI.',
      'Creating and documenting app-wide design system.',
      'Automating the collection of customer reviews.',
      'Creation of user survey templates.',
      'Promote the usage of React hooks for development.',
      'Development of Server Side Rendered React App using Next JS framework.',
      'Development of embedded third party JavaScript widgets',
      'Development of Shopify apps using Node Js, Next Js and GraphQL',
      'Development of REST APIs using Node Js',
      'Web Scraping for reviews aggregation',
      'Writing Unit and Integration tests using Jest and Enzyme',
      'Translate designs to front-end code, estimate time and costs, and determine developer requirements and specifications',
      'Writing cross-browser compatible style rules.',
      'Reviewed code to validate structures, verify browser, device and browser compatibility.',
      'Tested customer-facing prototypes before deployment, applying best practice diagnostic techniques to verify usability.',
      'Tools: JavaScript, React Js, Redux, Next JS, Node Js, Material UI, HTML, React Native, Bootstrap, Testing, Jest, Enzyme, Webpack, Styled JSX',
    ],
  },
  {
    role: 'Freelance Web Developer',
    companyName: 'Freelance (Part-time)',
    companyLogo: `${process.env.PUBLIC_URL}/images/e-developers.png`,
    duration: 'Jun 2017 - July 2019',
    description:
      'Being a freelance developer got to work with different clients and experienced working on multiple domains including real-estate, e-commerce, etc.',
    descriptionBullets: [
      'Offered complete online services, from creating web wireframes to developing and pushing them to production.',
      ' Completed full redesigns of existing websites to improve navigation, enhance visuals and strengthen search engine rankings.',
      'Created eye catching and functional digital design concepts across various platforms to strengthen client brand and identity.',
      'Produced UI / UX Designs in Figma.',
      'Tools: HTML, CSS, JavaScript, jQuery, Core PHP, Material Design, Bootstrap',
    ],
  },
  {
    role: 'Part-time Online Web Dev Instructor',
    companyName: 'TeacherOn',
    companyLogo: `${process.env.PUBLIC_URL}/images/teacheron.png`,
    duration: 'Oct 2017 - July 2019',
    description:
      'Taught people how to code in an efficient way. Helped non-IT background people in learning computer programming and web development. Overall it was a very great experience teaching people belonging to different parts of the world and of different age groups',
    descriptionBullets: false,
  },
  {
    role: 'Guest Instructor (One day Workshop)',
    companyName: 'Coding Stallions',
    companyLogo: `${process.env.PUBLIC_URL}/images/e-developers.png`,
    duration: '27, July 2018',
    description:
      'A no-fee one day workshop on web development open to the public and sponsored by Coding Stallions.',
    descriptionBullets: false,
  },
];

// education information section
const educationInfo: EducationInfo = [
  {
    collegeName: `CATHEDRAL SR. SEC. SCHOOL`,
    collegeLogo: `${process.env.PUBLIC_URL}/images/cathedral-logo.png`,
    duration: '1999 - 2013',
    description: 'INTERMEDIATE',
    descriptionBullets: false,
  },
  {
    collegeName: 'MCRP UNIVERSITY, BHOPAL',
    collegeLogo: `${process.env.PUBLIC_URL}/images/mcrp-university.png`,
    duration: '2014 - 2017',
    description: 'BACHELOR OF COMPUTER APPLICATIONS (BCA)',
    descriptionBullets: false,
  },
  {
    collegeName: 'INTEGRAL UNIVERSITY DDE, LUCKNOW',
    collegeLogo: `${process.env.PUBLIC_URL}/images/integral-uni.png`,

    duration: '2017 - 2019',
    description: 'MASTER OF COMPUTER APPLICATIONS (MCA)',
    descriptionBullets: false,
  },
];

export { bioData, skillTags, socialMediaLinks, workExperiences, educationInfo };
