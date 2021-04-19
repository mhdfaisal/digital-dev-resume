import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface IErrorMessage {
  children?: React.ReactNode;
  oneLiner?: string;
}

/**
 * A presentational component to display error messages
 */
const ErrorMessage: React.FC<IErrorMessage> = (props) => {
  const { children, oneLiner = '' } = props;
  return (
    <Grid container>
      <Typography variant="body1" color="error">
        {oneLiner}
      </Typography>
      {children}
    </Grid>
  );
};

export default ErrorMessage;
