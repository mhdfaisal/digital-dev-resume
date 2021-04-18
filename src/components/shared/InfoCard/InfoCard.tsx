import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShowMoreAccordion from '../ShowMoreAccordion/ShowMoreAccordion';

import './InfoCard.css';

interface IInfoCard {
  title?: string;
  subtitle?: string;
  metaData?: string;
  description?: string;
  descriptionBullets?: [] | false;
  imageURL?: string;
}

/**
 * A presentational component to display information in a card in a specific format.
 * @prop title - the title for the info card.
 * @prop subtitle - the subtitle for the info card.
 * @prop metaData - the meta data (for ex- duration, date) for the info card
 * @prop description - the description for the info card.
 * @prop descriptionBullets - the description bullet points for the info card.
 */
const InfoCard: React.FC<IInfoCard> = (props) => {
  const {
    title,
    subtitle,
    metaData,
    description,
    descriptionBullets,
    imageURL,
  } = props;
  return (
    <Card classes={{ root: 'info__card' }}>
      <div className="info__card__details">
        <CardContent classes={{ root: 'info__card__content' }}>
          {title && (
            <Typography component="h5" variant="h5">
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          )}
          {metaData && (
            <Typography variant="subtitle1" color="textSecondary">
              Mac Miller
            </Typography>
          )}
          {description && (
            <Typography variant="body2">{description}</Typography>
          )}
        </CardContent>
        <div>
          {descriptionBullets && <ShowMoreAccordion summary="Show more" />}
        </div>
      </div>
      {imageURL && (
        <CardMedia
          image="https://material-ui.com/static/images/cards/live-from-space.jpg"
          title="Live from space album cover"
          classes={{ root: 'info__card__media' }}
        />
      )}
    </Card>
  );
};

export default InfoCard;
