import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import emoji from 'react-easy-emoji';

import SkillTag from '../SkillTag/SkillTag';
import RepoCardSummary from './RepoCardSummary';

import { NodeType as PinnedItemsNodeType } from '../../../context/GithubProfileContext';
import { getRepoTopicsArr, openInNewTab } from '../../../utils/helpers';

import './RepoCard.css';

interface IRepoCard {
  repoDetails: PinnedItemsNodeType;
}

/**
 * Card to display github repo info
 * @prop repoDetails - an object confirming to interface NodeType
 */
const RepoCard: React.FC<IRepoCard> = (props) => {
  const { repoDetails } = props;
  const name = repoDetails?.name ?? '';
  const description = repoDetails?.description ?? '';
  const repositoryTopicsNodes = repoDetails?.repositoryTopics?.nodes ?? [];
  const diskUsage = repoDetails?.diskUsage ?? 0;
  const forkCount = repoDetails?.forkCount ?? 0;
  const homepageUrl = repoDetails?.homepageUrl ?? '';
  const primaryLanguage = repoDetails?.primaryLanguage ?? {};
  const primaryLanguageColor = primaryLanguage?.color ?? '';
  const primaryLanguageName = primaryLanguage?.name ?? '';
  const pushedAt = repoDetails?.pushedAt ?? '';
  const repoDetailRef = repoDetails?.refs ?? {};
  const repoDetailsRefNodes = repoDetailRef?.nodes ?? [];
  const latestCommitObj = repoDetailsRefNodes[0];
  const stargazers = repoDetails?.stargazers ?? {};
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
                <span key={Math.random()}>
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
                {emoji('📌')} {name}
              </Typography>
            )}
            {description && (
              <Typography variant="body1" gutterBottom>
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
      <CardActions>
        <Button size="small" onClick={() => openInNewTab(url)}>
          Github
        </Button>
        {homepageUrl && (
          <Button size="small" onClick={() => openInNewTab(homepageUrl)}>
            Live Demo
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default RepoCard;
