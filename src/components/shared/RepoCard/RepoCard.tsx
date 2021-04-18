import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SkillTag from '../SkillTag/SkillTag';

import { skillTags } from '../../../assets/portfolio-info';
import './RepoCard.css';

/**
 * Card to display github repo info
 */
const RepoCard: React.FC = () => (
  <Card classes={{ root: 'repo-card' }}>
    <CardContent classes={{ root: 'repo-card-content' }}>
      <Grid classes={{ root: 'repo-card-content-grid' }}>
        <Grid item xs={12} classes={{ root: 'repo-card-header-grid' }}>
          {skillTags &&
            skillTags.map((skillTag) => (
              <SkillTag key={skillTag?.id} {...skillTag} />
            ))}
          <Grid item xs={12} classes={{ root: 'repo-card-img-grid' }}>
            <div className="repo-card-figure">
              <img
                src="https://material-ui.com/static/images/cards/live-from-space.jpg"
                alt="repo-img"
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} classes={{ root: 'repo-card-details-grid' }}>
        <Grid item xs={12} classes={{ root: 'repo-card-details-main' }}>
          <Typography variant="h6" gutterBottom>
            Repo Name
          </Typography>
          <Typography variant="body1" gutterBottom>
            Offline enabled as Progressive Web App (PWA). Built with ReScript
            and React.
          </Typography>
        </Grid>
        <Grid item xs={12} classes={{ root: 'repo-card-meta-grid' }}>
          Other data will come here
        </Grid>
      </Grid>
    </CardContent>
    <CardActions>
      <Button size="small">Github</Button>
      <Button size="small">Live Demo</Button>
    </CardActions>
  </Card>
);

export default RepoCard;
