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
import { openInNewTab } from '../../../utils/helpers';

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
    mailToLink,
    linkedIn,
    twitter,
    facebook,
    instagram,
  } = socialMediaLinks;

  return (
    <div className={classes.root}>
      {github && (
        <IconButton
          aria-label="github-link"
          onClick={() => openInNewTab(github)}
        >
          <GitHubIcon />
        </IconButton>
      )}
      {mailToLink && (
        <IconButton
          aria-label="email-link"
          onClick={() => openInNewTab(mailToLink)}
        >
          <EmailIcon />
        </IconButton>
      )}
      {linkedIn && (
        <IconButton
          aria-label="linkedIn-link"
          onClick={() => openInNewTab(linkedIn)}
        >
          <LinkedInIcon />
        </IconButton>
      )}
      {twitter && (
        <IconButton
          aria-label="twitter-link"
          onClick={() => openInNewTab(twitter)}
        >
          <TwitterIcon />
        </IconButton>
      )}
      {facebook && (
        <IconButton
          aria-label="facebook-link"
          onClick={() => openInNewTab(facebook)}
        >
          <FacebookIcon />
        </IconButton>
      )}
      {instagram && (
        <IconButton
          aria-label="instagram-link"
          onClick={() => openInNewTab(instagram)}
        >
          <InstagramIcon />
        </IconButton>
      )}
    </div>
  );
};

export default IconButtons;
