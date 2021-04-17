import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

/**
 * Interface for ImageAvatar component props
 */
interface IImageAvatarProps {
  alt?: string;
  src?: string;
}

/**
 * Link a style sheet to the Home component using the hook pattern.
 */
const useStyles = makeStyles(() => ({
  large: {
    width: '6rem',
    height: '6rem',
  },
}));

/**
 * An image avatar component.
 * @props src - the source URL of the image.
 * @props alt - the alternate text to be displayed.
 */
const ImageAvatar: React.FC<IImageAvatarProps> = (props) => {
  const classes = useStyles();

  return (
    <Avatar
      alt="Remy Sharp"
      src="https://material-ui.com/static/images/avatar/1.jpg"
      className={classes.large}
    />
  );
};

export default ImageAvatar;
