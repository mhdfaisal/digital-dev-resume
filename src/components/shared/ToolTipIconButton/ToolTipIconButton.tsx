import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

interface ITooltipIconButton {
  children: React.ReactNode;
  tooltipTitle: string;
}

/**
 * Icon button wrapped in a tooltip.
 * @prop children - The Icon to display.
 * @prop tooltipTitle - The tooltip text to show.
 */
const ToolTipIconButton: React.FC<ITooltipIconButton> = (props) => {
  const { children, tooltipTitle } = props;
  return (
    <Tooltip title={tooltipTitle}>
      <IconButton>{children}</IconButton>
    </Tooltip>
  );
};

export default ToolTipIconButton;
