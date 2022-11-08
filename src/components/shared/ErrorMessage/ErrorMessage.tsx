import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface IErrorMessage {
  children: React.ReactNode;
  oneLiner: string;
}

/**
 * A presentational component to display error messages
 * @props children - React node
 * @props oneLiner - a single line error msg to be displayed
 */
const ErrorMessage: React.FC<Partial<IErrorMessage>> = (props) => {
  const { children, oneLiner = '' } = props;
  return (
    <Grid container>
      {oneLiner && (
        <Typography variant="body1" color="error">
          {oneLiner}
        </Typography>
      )}
      {children}
    </Grid>
  );
};

export default ErrorMessage;
