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
    'My specialization - simplifying and solving business problems efficiently using modern technologies and clean coding practices. Currently working as a Remote React Js Developer at TrustSearch Ltd, Latvia.',
    'A dynamic personality, and an experienced Web Developer. My daily routine involves the development of highly efficient and robust applications that simplify business problems. I enjoy working in a startup culture and love to take product ownership while working, and also challenging my abilities along with helping and motivating my teammates to meet strict requirements and deadlines.',
  ],
  recentChallengeSolved:
    'In my recent employment organization, I faced my most challenging job of creating third party embed JavaScript widgets which were intended to be configured by the clients using our dashboard and to be placed on their websites for reputation management. I was solely responsible for the accomplishment of this task, starting from scratch. It was a new thing for me since in the past I had already created some static JavaScript widgets but this time they were highly dynamic and with hell lot of configurations and also the challenge of making them appear the same on every client systems. To overcome this challenge I did some research by going through online resources and books (Third party Js etc) and finally reverse engineering the widgets of some competitors who were already doing something that we were trying to achieve. Finally, I was able to code the widget bootstrap script and also the widgets themselves and made them highly configurable by creating a widget management module inside the dashboard. Those widgets are still live and working and loved by the clients for displaying their reputations on their platforms.',
  bioTagLine:
    "Whether you're looking to hire an eager self-starter or build your network, I'd love to hear your story.",
};

const skillTags: SkillTags = [
  { name: 'JavaScript', backgroundColor: 'yellow', fontColor: '#000' },
  { name: 'Es6+', backgroundColor: 'yellow', fontColor: '#000' },
  { name: 'TypeScript', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'React Js', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'Redux', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'Next Js', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'Meteor Js', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'Web Sockets', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'Node Js', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'Express', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'MongoDB', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'GraphQL', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'Firebase', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'Docker', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'CI/CD', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'HTML', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'CSS', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'Sass', backgroundColor: 'blue', fontColor: '#000' },
  { name: 'Material Design', backgroundColor: 'blue', fontColor: '#000' },
];

const socialMediaLinks: ISocialMediaLinks = {
  github: 'https://github.com/mhdfaisal/',
  gmail: 'fmohd195@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/mohdfaisal9005/',
  twitter: 'https://twitter.com/MohdFaisal9005',
  facebook: false,
  instagram: false,
  medium: false,
  skype: 'live:7ff348f368d1eda6',
};

const workExperiences: WorkExperiences = [
  {
    role: '',
    companyName: '',
    companyLogo: '',
    duration: '',
    description: '',
    descriptionBullets: [],
  },
];

const educationInfo: EducationInfo = [
  {
    collegeName: '',
    collegeLogo: '',
    duration: '',
    description: '',
    descriptionBullets: [],
  },
];

export { bioData, skillTags, socialMediaLinks, workExperiences, educationInfo };
