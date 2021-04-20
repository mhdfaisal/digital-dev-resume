import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import SocialMediaLinksList from '../shared/SocialMediaLinksList/SocialMediaLinksList';
import ScrollTop from '../shared/ScrollTop/ScrollTop';
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
    <ScrollTop elementId="back-to-top-anchor">
      <Fab color="secondary" size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
  </footer>
);

export default Footer;
