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
import LoadingProgress from '../shared/LoadingProgress/LoadingProgress';
import GithubProfileContext, {
  RefNode as RecentRepositoriesNodeType,
} from '../../context/GithubProfileContext';
import errorMsgs from '../../utils/constants/error-messages';

import './RecentActivities.css';

/**
 * A container component to display recently accessed repositories on github by the user.
 */
const RecentActivities: React.FC = () => {
  const { isLoading, error, user } = useContext(GithubProfileContext);
  const repositories = user?.repositories;
  const { nodes = [] } = repositories ?? {};
  // state variable and method for controlled accordion
  const [expanded, setExpanded] = React.useState<string | false>(false);

  // handler for accordion expand state change
  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Grid container classes={{ root: 'recent__activities' }}>
      <Grid item md={1} />
      <Grid item md={10} classes={{ root: 'recent__activities-full-w' }}>
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
              classes={{ root: 'recent__activities-accordion-title' }}
            >
              {emoji('🕰️')} Recently Active Repositories
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              classes={{ root: 'recent__activities-grid-container' }}
            >
              <Grid container spacing={3}>
                {nodes &&
                  nodes.map((repository) => (
                    <Grid
                      item
                      lg={4}
                      md={6}
                      xs={12}
                      key={uuidv1()}
                      classes={{ root: 'recent__activities-card-grid' }}
                    >
                      <RepoCard
                        repoDetails={{
                          ...(repository as RecentRepositoriesNodeType),
                        }}
                      />
                    </Grid>
                  ))}
                {!isLoading && error && (
                  <ErrorMessage oneLiner={errorMsgs.RECENT_REPOS_ERROR_MSG} />
                )}
                <LoadingProgress isLoading={!!isLoading} source="GitHub" />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default RecentActivities;
