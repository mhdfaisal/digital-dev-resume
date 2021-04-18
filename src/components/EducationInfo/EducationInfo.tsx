import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import emoji from 'react-easy-emoji';

import InfoCard from '../shared/InfoCard/InfoCard';

import { educationInfo as educationInfoData } from '../../assets/portfolio-info';
import './EducationInfo.css';

/**
 * A presentational component to display educational information.
 */
const EducationInfo: React.FC = () => (
  <Grid classes={{ root: 'education__info' }}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="education__info-content"
        id="education__info-header"
      >
        <Typography variant="h6" gutterBottom color="textSecondary">
          <span className="education__info-header-icon">{emoji('🎓')}</span>{' '}
          <span> Education</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
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
      </AccordionDetails>
    </Accordion>
  </Grid>
);

export default EducationInfo;
