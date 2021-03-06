import React from 'react';
import Grid from '@material-ui/core/Grid';

import EducationInfo from '../EducationInfo/EducationInfo';
import WorkExperience from '../WorkExperience/WorkExperience';

import './EducationAndWork.css';

/**
 * A container component to display EducationInfo and Work Experience
 */
const EducationAndWork: React.FC = () => (
  <Grid container classes={{ root: 'education__and__work' }}>
    <Grid item md={1} />
    <Grid item md={10} classes={{ root: 'education__and__work-full-w' }}>
      <Grid
        container
        spacing={3}
        classes={{ root: 'education__and__work-container-grid' }}
      >
        <Grid item md={6}>
          <EducationInfo />
        </Grid>
        <Grid item md={6}>
          <WorkExperience />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default EducationAndWork;
