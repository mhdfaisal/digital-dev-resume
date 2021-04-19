import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SocialMediaLinksList from '../shared/SocialMediaLinksList/SocialMediaLinksList';

import './Footer.css';

/**
 * Presentational component to display footer information
 */
const Footer: React.FC = () => (
  <footer>
    <Grid container classes={{ root: 'footer__container' }}>
      <Grid item xs={1} />
      <Grid item xs={10}>
        <Typography variant="subtitle2">
          Digital Dev Resume | By Mohd Faisal
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            <SocialMediaLinksList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </footer>
);

export default Footer;
