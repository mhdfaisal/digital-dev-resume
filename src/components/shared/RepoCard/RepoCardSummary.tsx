import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import emoji from 'react-easy-emoji';

import { RefNode } from '../../../context/GithubProfileContext';

import './RepoCardSummary.css';

interface IRepoCardSummary {
  repoSummary: {
    primaryLanguageColor: string;
    primaryLanguageName: string;
    forkCount: number;
    stars: number;
    diskUsage: number;
    pushedAt: string;
    latestCommitObj: RefNode;
  };
}

/**
 * A presentational component to display repository summary.
 * @props repoSummary - object holding the info about a repository such as name, description, etc.
 * For keys inside repSummary refer - IRepoCardSummary
 */
const RepoCardSummary: React.FC<IRepoCardSummary> = (props) => {
  const { repoSummary } = props;
  const {
    primaryLanguageColor,
    primaryLanguageName,
    forkCount,
    stars,
    diskUsage,
    pushedAt,
    latestCommitObj,
  } = repoSummary;

  const { name, target } = latestCommitObj;
  const totalCount = target?.history?.totalCount ?? 0;
  const messageHeadline = target?.messageHeadline ?? '';
  const pushedDate = target?.pushedDate ?? '';

  return (
    <Grid container classes={{ root: 'repo__card-summary' }}>
      <Grid item xs={12} classes={{ root: 'repo__card-summary-top' }}>
        <Typography
          variant="caption"
          classes={{ root: 'repo__card__summary-primary-lang' }}
        >
          <span
            className="repo__card__summary-primary-lang-color"
            style={{
              background: primaryLanguageColor,
            }}
          />
          <span>{primaryLanguageName}</span>
        </Typography>
        <Typography
          variant="caption"
          classes={{ root: 'repo__card__summary-fork' }}
        >
          {emoji('🍴')}
          <span> {forkCount}</span>
        </Typography>
        <Typography
          variant="caption"
          classes={{ root: 'repo__card__summary-star' }}
        >
          {emoji(' ⭐')}
          <span>{stars}</span>
        </Typography>
        <Typography
          variant="caption"
          classes={{ root: 'repo__card__summary-usage' }}
        >
          {emoji(' 💾')}
          <span>{diskUsage} KB</span>
        </Typography>
      </Grid>
      <Grid item xs={12} classes={{ root: 'repo__card-summary-bottom' }}>
        <Typography
          variant="caption"
          classes={{ root: 'repo__card-summary-bottom-item' }}
        >
          <span>{emoji('⚡')}</span>
          <span>{messageHeadline}</span>
        </Typography>
        <Typography
          variant="caption"
          classes={{ root: 'repo__card-summary-bottom-item' }}
        >
          <span>{emoji('⚡')}</span>
          <span>
            1m ago on <span>{name}</span>
          </span>
        </Typography>
        <Typography
          variant="caption"
          classes={{ root: 'repo__card-summary-bottom-item' }}
        >
          <span>{emoji('⚡')}</span>
          <span>
            {totalCount} commits on <span>branch {name}</span>
          </span>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RepoCardSummary;
