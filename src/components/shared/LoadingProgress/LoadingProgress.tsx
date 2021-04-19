import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './LoadingProgress.css';

interface ILoadingProps {
  isLoading: boolean;
  source: string;
}
/**
 * A presentational component to display progress spinner and message
 * @props isLoading - to indicate is isLoading (true / false)
 * @props source - data isLoading source name
 */
const LoadingProgress: React.FC<ILoadingProps> = ({ isLoading, source }) => (
  <>
    {isLoading ? (
      <Grid classes={{ root: 'loading__container' }}>
        <CircularProgress />
        <Typography
          variant="body2"
          classes={{ root: 'loading__container-source' }}
        >
          'Loading data from {source}...'
        </Typography>
      </Grid>
    ) : null}
  </>
);

export default LoadingProgress;
