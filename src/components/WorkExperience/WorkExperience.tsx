import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InfoCard from '../shared/InfoCard/InfoCard';

import { workExperiences as workExperiencesData } from '../../assets/portfolio-info';

/**
 * A presentational component to display work experience information.
 */
const WorkExperience: React.FC = () => (
  <Grid classes={{ root: 'education__info' }}>
    <Typography variant="h6" gutterBottom color="textSecondary">
      Work Experience
    </Typography>
    {workExperiencesData &&
      workExperiencesData.map((workExperienceItem) => {
        const {
          role,
          companyName,
          duration,
          description,
          descriptionBullets,
          companyLogo,
        } = workExperienceItem;
        return (
          <Grid item xs={12} key={Math.random()}>
            <InfoCard
              title={role}
              subtitle={companyName}
              metaData={duration}
              description={description}
              descriptionBullets={descriptionBullets}
              imageURL={companyLogo}
            />
          </Grid>
        );
      })}
  </Grid>
);

export default WorkExperience;
