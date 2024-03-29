import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import emoji from 'react-easy-emoji';
import { v1 as uuidv1 } from 'uuid';

import SkillTag from '../SkillTag/SkillTag';
import RepoCardSummary from './RepoCardSummary';

import { NodeType as PinnedItemsNodeType } from '../../../context/GithubProfileContext';
import { getRepoTopicsArr, openInNewTab } from '../../../utils/helpers';

import './RepoCard.css';

interface IRepoCard {
  repoDetails: Partial<PinnedItemsNodeType>;
}

/**
 * Card to display github repo info
 * @prop repoDetails - an object confirming to interface NodeType
 */
const RepoCard: React.FC<Partial<IRepoCard>> = (props) => {
  const { repoDetails } = props;
  const name = repoDetails?.name ?? '';
  const description = repoDetails?.description ?? '';
  const repositoryTopicsNodes = repoDetails?.repositoryTopics?.nodes ?? [];
  const diskUsage = repoDetails?.diskUsage ?? 0;
  const forkCount = repoDetails?.forkCount ?? 0;
  const homepageUrl = repoDetails?.homepageUrl ?? '';
  const primaryLanguage = repoDetails?.primaryLanguage;
  const primaryLanguageColor = primaryLanguage?.color ?? '';
  const primaryLanguageName = primaryLanguage?.name ?? '';
  const pushedAt = repoDetails?.pushedAt ?? '';
  const repoDetailRef = repoDetails?.refs;
  const repoDetailsRefNodes = repoDetailRef?.nodes ?? [];
  const latestCommitObj = repoDetailsRefNodes[0];
  const stargazers = repoDetails?.stargazers;
  const url = repoDetails?.url ?? '';

  return (
    <Card classes={{ root: 'repo-card' }}>
      <CardContent classes={{ root: 'repo-card-content' }}>
        <Grid classes={{ root: 'repo-card-content-grid' }}>
          <Grid item xs={12} classes={{ root: 'repo-card-header-grid' }}>
            {getRepoTopicsArr(repositoryTopicsNodes).map((topic) => {
              const topicName = topic?.name ?? '';
              const id = topic?.id;
              return (
                <span key={uuidv1()}>
                  <SkillTag name={topicName} id={id} />
                </span>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} classes={{ root: 'repo-card-details-grid' }}>
          <Grid item xs={12} classes={{ root: 'repo-card-details-main' }}>
            {name && (
              <Typography variant="h6" gutterBottom>
                {emoji('🗄️')} {name}
              </Typography>
            )}
            {description && (
              <Typography variant="body2" gutterBottom>
                {description}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} classes={{ root: 'repo-card-meta-grid' }}>
            <RepoCardSummary
              repoSummary={{
                primaryLanguageColor,
                primaryLanguageName,
                forkCount,
                stars: stargazers?.totalCount ?? 0,
                diskUsage,
                pushedAt,
                latestCommitObj,
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions classes={{ root: 'repo-card-actions' }}>
        <Button
          size="small"
          variant="outlined"
          onClick={() => openInNewTab(url)}
          startIcon={<GitHubIcon />}
        >
          Github
        </Button>
        {homepageUrl && (
          <Button
            size="small"
            variant="outlined"
            startIcon={<LinkIcon />}
            onClick={() => openInNewTab(homepageUrl)}
          >
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default RepoCard;
