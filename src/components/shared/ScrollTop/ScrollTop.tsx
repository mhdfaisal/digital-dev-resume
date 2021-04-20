import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';

interface IScrollTop {
  children: React.ReactNode;
  elementId: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

/**
 * A container component to scroll into a view on click of the target element
 */

const ScrollTop = (props: IScrollTop) => {
  const { children, elementId } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const handleClick = () => {
    const anchor = document.querySelector(`#${elementId}`);

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

export default ScrollTop;
