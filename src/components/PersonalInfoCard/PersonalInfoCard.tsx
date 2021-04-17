import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SkillTag from '../shared/SkillTag/SkillTag';
import ImageAvatar from '../shared/ImageAvatar/ImageAvatar';
import GithubVCard from '../GithubVCard/GithubVCard';

import { skillTags } from '../../assets/portfolio-info';
import './PersonalInfoCard.css';

/**
 * Card to display profile Information
 */
const PersonalInfoCard: React.FC = () => (
  <Card classes={{ root: 'person-info__card' }}>
    <CardContent>
      <Grid>
        <Grid
          item
          xs={12}
          classes={{ root: 'personal-info__card-header-grid' }}
        >
          {skillTags &&
            skillTags.map((skillTag) => (
              <SkillTag key={skillTag?.id} {...skillTag} />
            ))}
        </Grid>
        <Grid
          item
          xs={12}
          classes={{ root: 'personal-info__card-avatar-grid' }}
        >
          <ImageAvatar />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            Mohammad Faisal
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          classes={{ root: 'personal-info__card-github-grid' }}
        >
          <GithubVCard />
        </Grid>
      </Grid>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default PersonalInfoCard;
