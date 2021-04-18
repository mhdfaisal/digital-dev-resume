import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InfoCard from '../shared/InfoCard/InfoCard';

import { educationInfo as educationInfoData } from '../../assets/portfolio-info';

/**
 * A presentational component to display educational information.
 */
const EducationInfo: React.FC = () => (
  <Grid classes={{ root: 'education__info' }}>
    <Typography variant="h6" gutterBottom color="textSecondary">
      Educational Background
    </Typography>
    {educationInfoData &&
      educationInfoData.map((educationItem) => {
        const {
          collegeName,
          collegeLogo,
          duration,
          description,
          descriptionBullets,
        } = educationItem;
        return (
          <Grid item xs={12} key={Math.random()}>
            <InfoCard
              title={collegeName}
              metaData={duration}
              description={description}
              descriptionBullets={descriptionBullets}
              imageURL={collegeLogo}
            />
          </Grid>
        );
      })}
  </Grid>
);

export default EducationInfo;
