import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import RepoCard from '../shared/RepoCard/RepoCard';
import GithubProfileContext, {
  NodeType as PinnedItemsNodeType,
} from '../../context/GithubProfileContext';

import './PinnedRepos.css';

/**
 * A container component to display pinned / featured repositories on github
 */
const PinnedRepos: React.FC = () => {
  const { isLoading, error, user } = useContext(GithubProfileContext);
  const pinnedItems = user?.pinnedItems ?? {};
  const { edges = [], totalCount } = pinnedItems;

  return (
    <Grid container classes={{ root: 'pinned__repos' }}>
      <Grid item md={1} />
      <Grid item md={10}>
        <Typography variant="h4" gutterBottom>
          Pinned Repositories
          {/* <Typography variant="h6">(Total : {totalCount} on Github)</Typography> */}
        </Typography>
        <Paper classes={{ root: 'pinned__repos-paper-container' }}>
          <Grid container spacing={3}>
            {edges &&
              edges.map((edge) => (
                <Grid item sm={4} key={Math.random()}>
                  <RepoCard
                    repoDetails={{ ...(edge?.node as PinnedItemsNodeType) }}
                  />
                </Grid>
              ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default PinnedRepos;
