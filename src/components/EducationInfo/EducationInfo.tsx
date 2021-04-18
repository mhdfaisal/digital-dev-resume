import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InfoCard from '../shared/InfoCard/InfoCard';

/**
 * A presentational component to display educational information.
 */
const EducationInfo: React.FC = () => (
  <Grid>
    <Typography variant="h6" gutterBottom>
      Educational Background
    </Typography>
    <InfoCard />
  </Grid>
);

export default EducationInfo;
