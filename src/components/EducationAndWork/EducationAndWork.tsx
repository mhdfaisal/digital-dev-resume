import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
      <Paper>A</Paper>
    </Grid>
  </Grid>
);

export default EducationAndWork;
