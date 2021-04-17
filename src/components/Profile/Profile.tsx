import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import PersonalInfoCard from '../PersonalInfoCard/PersonalInfoCard';

import './Profile.css';

/**
 * Contains personal info and bio data.
 */
const Profile: React.FC = () => (
  <Grid container>
    <Grid item sm={5} classes={{ root: 'profile__personal-card-grid' }}>
      <PersonalInfoCard />
    </Grid>
    <Grid item sm={7}>
      <Paper>xs=12 sm=6</Paper>
    </Grid>
  </Grid>
);

export default Profile;
