import React from 'react';
import Grid from '@material-ui/core/Grid';

import PersonalInfoCard from '../PersonalInfoCard/PersonalInfoCard';
import About from '../About/About';

import './Profile.css';

/**
 * Contains personal info and bio data.
 */
const Profile: React.FC = () => (
  <Grid container>
    <Grid item md={1} />
    <Grid item md={3} classes={{ root: 'profile__personal-card-grid' }}>
      <PersonalInfoCard />
    </Grid>
    <Grid item md={7} classes={{ root: 'profile__about-card-grid' }}>
      <About />
    </Grid>
  </Grid>
);

export default Profile;
