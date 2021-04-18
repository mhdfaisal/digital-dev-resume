import React from 'react';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './ShowMoreAccordion.css';

interface IShowMoreAccordion {
  summary: string;
  details?: string;
}

/**
 * An expandable and collapsible accordion to show more content.
 * @prop summary - The summary to display on the accordion.
 * @prop details - The details to display in expanded accordion.
 */
const ShowMoreAccordion: React.FC<IShowMoreAccordion> = (props) => {
  const { summary, details = '' } = props;
  return (
    <Accordion classes={{ root: 'show__more-accordion' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${summary} content`}
        id={`${summary} header`}
      >
        <Typography>{summary}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default ShowMoreAccordion;
