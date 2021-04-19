import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

interface ITooltipIconButton {
  children: React.ReactNode;
  tooltipTitle: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Icon button wrapped in a tooltip.
 * @prop children - The Icon to display.
 * @prop tooltipTitle - The tooltip text to show.
 * @prop onClick - IconButton click event handler
 */
const ToolTipIconButton: React.FC<ITooltipIconButton> = (props) => {
  const { children, tooltipTitle, onClick } = props;
  return (
    <Tooltip title={tooltipTitle}>
      <IconButton onClick={onClick}>{children}</IconButton>
    </Tooltip>
  );
};

export default ToolTipIconButton;
