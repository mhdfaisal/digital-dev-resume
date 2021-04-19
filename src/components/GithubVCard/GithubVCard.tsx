import React, { useContext } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import emoji from 'react-easy-emoji';

import GithubProfileContext from '../../context/GithubProfileContext';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';
import errorMsgs from '../../utils/constants/error-messages';

import './GithubVCard.css';

/**
 * A card to display a list of github v-card data.
 */
const GithubVCard: React.FC = () => {
  const { isLoading, error, user } = useContext(GithubProfileContext);
  const status = user?.status ?? {};
  const country = user?.location ?? '';
  const company = user?.company ?? '';
  const { emojiHTML, message } = status;
  const emojiHTMLStr: string = emojiHTML as string;

  return (
    <>
      <List
        component="ul"
        aria-label="main mailbox folders"
        classes={{ root: 'github__vcard-list' }}
      >
        {message && (
          <ListItem>
            <ListItemIcon>
              <div
                className="github__vcard-g-emoji"
                dangerouslySetInnerHTML={{ __html: emojiHTMLStr }}
              />
            </ListItemIcon>
            <ListItemText primary={message} />
          </ListItem>
        )}
        {country && (
          <ListItem>
            <ListItemIcon>{emoji('🏠')}</ListItemIcon>
            <ListItemText primary={country} />
          </ListItem>
        )}
        {company && (
          <ListItem>
            <ListItemIcon>{emoji(' 🏗️')}</ListItemIcon>
            <ListItemText primary={company} />
          </ListItem>
        )}
      </List>
      {!isLoading && error && (
        <ErrorMessage oneLiner={errorMsgs.PERSONAL_INFO_CARD_ERROR_MSG} />
      )}
    </>
  );
};

export default GithubVCard;
