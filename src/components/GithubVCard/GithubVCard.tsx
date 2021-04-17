import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import emoji from 'react-easy-emoji';

import './GithubVCard.css';

/**
 * A card to display a list of github v-card data.
 */
const GithubVCard: React.FC = () => (
  <List
    component="ul"
    aria-label="main mailbox folders"
    classes={{ root: 'github__vcard-list' }}
  >
    <ListItem button>
      <ListItemIcon>{emoji('🚀')}</ListItemIcon>
      <ListItemText primary="Delivering" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{emoji('🏠')}</ListItemIcon>
      <ListItemText primary="India" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>{emoji(' 🏗️')}</ListItemIcon>
      <ListItemText primary="Frontend Dev at TheTrustSearch" />
    </ListItem>
  </List>
);

export default GithubVCard;
