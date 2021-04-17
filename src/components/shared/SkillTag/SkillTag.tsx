import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import { ISkillTag } from '../../../assets/portfolio-info.types';

/**
 * Props interface for SkillTag component
 * @extends ISkillTag interface for skill tag object
 */
interface ISkillTagProps extends ISkillTag {
  size?: 'small' | 'medium' | undefined;
}

/**
 * Link a style sheet to the SkillTag component using the hook pattern.
 */
const useStyles = makeStyles({
  root: (props: React.PropsWithChildren<ISkillTagProps>) => ({
    color: props?.fontColor ?? 'primary',
    backgroundColor: props.backgroundColor ?? 'secondary',
    margin: '0 0.2rem 0.2rem ',
    fontSize: '0.75rem',
  }),
});

/**
 * Tag component to display a skill badge.
 * @props size - the size of the skill tag.
 * @props name - the label to display on the tag.
 * @props fontColor - the font color of the tag label.
 * @props backgroundColor - the background color of the tag.
 */
const SkillTag: React.FC<ISkillTagProps> = (props) => {
  const classes = useStyles(props);
  const { size = 'small', name } = props;
  return <Chip size={size} label={name} className={classes.root} />;
};

export default SkillTag;
