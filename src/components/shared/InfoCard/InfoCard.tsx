import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ShowMoreAccordion from '../ShowMoreAccordion/ShowMoreAccordion';

import './InfoCard.css';
import EmojiList from '../EmojiList/EmojiList';

interface IInfoCard {
  title?: string;
  subtitle?: string;
  metaData?: string;
  description?: string;
  descriptionBullets?: string[] | false;
  imageURL?: string | false;
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
            <Typography
              variant="body1"
              classes={{ body1: 'info__card__title' }}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="subtitle1" color="textSecondary">
              {subtitle}
            </Typography>
          )}
          {metaData && (
            <Typography variant="subtitle1" color="textSecondary">
              {metaData}
            </Typography>
          )}
          {description && (
            <Typography variant="body2">{description}</Typography>
          )}
        </CardContent>
        {descriptionBullets && (
          <div className="info__card-description-bullets">
            <ShowMoreAccordion summary="More">
              <EmojiList dataArr={descriptionBullets} />
            </ShowMoreAccordion>
          </div>
        )}
      </div>
      {imageURL && (
        <CardMedia
          image={imageURL}
          title="Live from space album cover"
          classes={{ root: 'info__card__media' }}
        />
      )}
    </Card>
  );
};

export default InfoCard;
