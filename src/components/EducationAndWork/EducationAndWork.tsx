import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import EducationInfo from '../EducationInfo/EducationInfo';

import './EducationAndWork.css';

/**
 * A container component to display EducationInfo and Work Experience
 */
const EducationAndWork: React.FC = () => (
  <Grid container classes={{ root: 'education__and__work' }}>
    <Grid item md={1} />
    <Grid item md={10}>
      <Typography variant="h4" gutterBottom>
        Education &amp; Work Experience
      </Typography>
      <Paper classes={{ root: 'education__and__work-paper-container' }}>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <EducationInfo />
          </Grid>
          <Grid item sm={6}>
            6
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);

export default EducationAndWork;
