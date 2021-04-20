import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

import { socialMediaLinks } from '../../../assets/portfolio-info';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

const IconButtons: React.FC = () => {
  const classes = useStyles();
  const {
    github,
    email,
    linkedIn,
    twitter,
    facebook,
    instagram,
  } = socialMediaLinks;

  return (
    <div className={classes.root}>
      {github && (
        <IconButton aria-label="github-link" color="primary">
          <GitHubIcon />
        </IconButton>
      )}
      {email && (
        <IconButton aria-label="email-link" color="primary">
          <EmailIcon />
        </IconButton>
      )}
      {linkedIn && (
        <IconButton aria-label="linkedIn-link" color="primary">
          <LinkedInIcon />
        </IconButton>
      )}
      {twitter && (
        <IconButton aria-label="twitter-link" color="primary">
          <TwitterIcon />
        </IconButton>
      )}
      {facebook && (
        <IconButton aria-label="facebook-link" color="primary">
          <FacebookIcon />
        </IconButton>
      )}
      {instagram && (
        <IconButton aria-label="instagram-link" color="primary">
          <InstagramIcon />
        </IconButton>
      )}
    </div>
  );
};

export default IconButtons;
