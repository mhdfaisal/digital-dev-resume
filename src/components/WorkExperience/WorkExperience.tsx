import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import emoji from 'react-easy-emoji';

import InfoCard from '../shared/InfoCard/InfoCard';

import { workExperiences as workExperiencesData } from '../../assets/portfolio-info';
import './WorkExperience.css';

/**
 * A presentational component to display work experience information.
 */
const WorkExperience: React.FC = () => (
  <Grid classes={{ root: 'work__experience' }}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="work__experience-content"
        id="work__experience-header"
      >
        <Typography variant="h6" gutterBottom color="textSecondary">
          <span className="work__experience-header-icon">{emoji(' 🏗️')}</span>
          <span>Work Experience</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          {workExperiencesData &&
            workExperiencesData.map((workExperienceDataItem) => {
              const {
                role,
                companyName,
                companyLogo,
                duration,
                description,
                descriptionBullets,
              } = workExperienceDataItem;
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
      </AccordionDetails>
    </Accordion>
  </Grid>
);

export default WorkExperience;
