/**
 * Static data for Bio Section
 * @description aboutMe - paragraphs explaining about my personality.
 * @description recentChallengeSolved - A recent challenge solved by me either at work / personal.
 * @description bioTagLine - A tagline to receive leads / DMs.
 * @description resumeDownloadLink - A link to download soft copy of resume.
 * @description meetingSchedulerLink - A link to schedule a meeting (Calendly, etc).
 */
export interface IBioData {
  aboutMe: string[] | false;
  recentChallengeSolved: string | false;
  bioTagLine: string | false;
  resumeDownloadLink: string | false;
  meetingSchedulerLink: string | false;
}

/**
 * A skill tag
 * @description name - name of skill (React / JavaScript).
 * @description backgroundColor - background color for skill badge (yellow, etc).
 * @description fontColor - font color for skill badge (black, white, etc).
 */
export interface ISkillTag {
  name: string;
  backgroundColor?: string;
  fontColor?: string;
}

/**
 * Skill tags array
 * @example
 * can be false OR
 * ```
 * [...
 * {name: 'JavaScript', backgroundColor: 'red', fontColor: 'white'} ]
 * ```
 */
export type SkillTags = ISkillTag[] | false;

/**
 * Social media links
 * @description github, gmail, linkedIn, twitter, ..etc - URLs.
 */
export interface ISocialMediaLinks {
  github: string | false;
  gmail: string | false;
  linkedIn: string | false;
  twitter: string | false;
  facebook: string | false;
  instagram: string | false;
  medium: string | false;
  skype: string | false;
}

/**
 * A single work experience object
 * @description role - Role at the company.
 * @description companyName - Name of the company.
 * @description companyLogo - Logo of the company.
 * @description duration - Employment duration.
 * @description description - Job description.
 * @description descriptionBullets - Achievements / experiences to highlight.
 */
export interface IWorkExperience {
  role: string;
  companyName: string;
  companyLogo?: string;
  duration: string;
  description: string;
  descriptionBullets?: string[];
}

/**
 * Work experiences
 * @example
 * can be false OR
 * ```
 * [...
 * {role: 'UI Developer', companyName: 'ABC Ltd', companyLogo: 'logo_url', duration:'July 2019 - Present', description: 'lorem ipsum.....', descriptionBullets: ['lorem...', 'some...']} ]
 * ```
 */
export type WorkExperiences = IWorkExperience[] | false;

/**
 * College details
 * @description collegeName - Name of the college / university.
 * @description collegeLogo - College logo URL.
 * @description duration - Duration of the course.
 * @description description - Degree / Diploma, etc name.
 * @description descriptionBullets - Learning / achievements to highlight.
 */
export interface ICollege {
  collegeName: string;
  collegeLogo: string | false;
  duration: string;
  description: string;
  descriptionBullets: string[];
}

/**
 * Education Information
 * @example
 * Can be false OR
 * ```
 * [... {collegeName: 'ABC University', collegeLogo:'logo_url', duration: '2011 - 2015', description: 'lorem ipsum.....', descriptionBullets: ['lorem...', 'some...']} ]
 * ```
 */
export type EducationInfo = ICollege[] | false;
