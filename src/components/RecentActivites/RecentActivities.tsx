import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import RepoCard from '../shared/RepoCard/RepoCard';

import './RecentActivities.css';

/**
 * A container component to display recently accessed repositories on github by the user.
 */
const RecentActivities: React.FC = () => (
  <Grid container classes={{ root: 'featured__repos' }}>
    <Grid item md={1} />
    <Grid item md={10}>
      <Typography variant="h4" gutterBottom>
        Recent Activities
      </Typography>
      <Paper classes={{ root: 'featured__repos-paper-container' }}>
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <RepoCard />
          </Grid>
          <Grid item sm={4}>
            <RepoCard />
          </Grid>
          <Grid item sm={4}>
            <RepoCard />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);

export default RecentActivities;
