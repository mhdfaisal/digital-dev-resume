import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import emoji from 'react-easy-emoji';
import { v1 as uuidv1 } from 'uuid';

import RepoCard from '../shared/RepoCard/RepoCard';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';
import GithubProfileContext, {
  NodeType as PinnedItemsNodeType,
} from '../../context/GithubProfileContext';
import errorMsgs from '../../utils/constants/error-messages';

import './PinnedRepos.css';

/**
 * A container component to display pinned / featured repositories on github
 */
const PinnedRepos: React.FC = () => {
  const { isLoading, error, user } = useContext(GithubProfileContext);
  const pinnedItems = user?.pinnedItems ?? {};
  const { edges = [], totalCount } = pinnedItems;
  // state variable and method for controlled accordion
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  // handler for accordion expand state change
  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid container classes={{ root: 'pinned__repos' }}>
      <Grid item md={1} />
      <Grid item md={10}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              variant="h6"
              classes={{ root: 'pinned__repos-accordion-title' }}
            >
              {emoji('📌')} Pinned Repositories
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container classes={{ root: 'pinned__repos-grid-container' }}>
              <Grid container spacing={3}>
                {edges &&
                  edges.map((edge) => (
                    <Grid item sm={4} key={uuidv1()}>
                      <RepoCard
                        repoDetails={{ ...(edge?.node as PinnedItemsNodeType) }}
                      />
                    </Grid>
                  ))}
                {!isLoading && error && (
                  <ErrorMessage oneLiner={errorMsgs.PINNED_REPOS_ERROR_MSG} />
                )}
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};
export default PinnedRepos;
