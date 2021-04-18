import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import emoji from 'react-easy-emoji';

import ShowMoreAccordion from '../shared/ShowMoreAccordion/ShowMoreAccordion';

import { bioData, socialMediaLinks } from '../../assets/portfolio-info';
import './About.css';

/**
 *  A presentational component to display profile information (bio data)
 */
const About: React.FC = () => {
  const { aboutMe, recentChallengeSolved, bioTagLine } = bioData;
  const { linkedIn, skype } = socialMediaLinks;
  return (
    <Paper className="about__container">
      <Typography variant="h4" classes={{ root: 'about__container-heading' }}>
        About Me
      </Typography>
      {aboutMe &&
        aboutMe.map((aboutMePara) => (
          <Typography
            variant="body1"
            key={Math.random()}
            classes={{ root: 'about__container-about-para' }}
          >
            {aboutMePara}
          </Typography>
        ))}
      <Grid container>
        {recentChallengeSolved && (
          <ShowMoreAccordion
            summary="A Recent Challenge Solved"
            details={recentChallengeSolved}
          />
        )}
      </Grid>
      <Grid container>
        <Typography variant="h6" gutterBottom>
          {bioTagLine}
        </Typography>
        {linkedIn && (
          <Typography variant="body1">
            {emoji('📥')} DMs are open on{' '}
            <a href={linkedIn} rel="noreferrer" target="_blank">
              LinkedIn
            </a>{' '}
            {skype && (
              <span>
                and <a href={`skype:${skype}?chat`}>Skype</a>
              </span>
            )}
          </Typography>
        )}
      </Grid>
    </Paper>
  );
};

export default About;
