import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './PinnedRepos.css';

/**
 * A container component to display pinned / featured repositories on github
 */
const PinnedRepos: React.FC = () => (
  <Grid container classes={{ root: 'pinned__repos' }}>
    <Grid item md={1} />
    <Grid item md={10}>
      <Typography variant="h4" gutterBottom>
        Pinned Repositories
      </Typography>
      <Paper classes={{ root: 'pinned__repos-paper-container' }}>
        <Grid container spacing={3}>
          <Grid item sm={4}>
            ASD
          </Grid>
          <Grid item sm={4}>
            ZXC
          </Grid>
          <Grid item sm={4}>
            ZXC
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);

export default PinnedRepos;
