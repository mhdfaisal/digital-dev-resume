import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import PhoneIcon from '@material-ui/icons/Phone';
import Grid from '@material-ui/core/Grid';

import ToolTipIconButton from '../shared/ToolTipIconButton/ToolTipIconButton';
import { ThemeContext } from '../../context/ThemeContext';

import './NavBar.css';

/**
 * The horizontal top navbar component to display logo and menu links/buttons
 */
const NavBar: React.FC = () => {
  // theme mode context data, to identify and switch between themes
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);

  const onThemeToggle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    toggleThemeMode();
  };

  return (
    <nav className="navbar__container">
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={8}
              classes={{ root: 'navbar__container-title-grid' }}
            >
              <Typography
                variant="h4"
                classes={{ root: 'navbar__container-title' }}
              >
                &lt; Mohd Faisal / &gt;
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              classes={{ root: 'navbar__container-icons-grid' }}
            >
              <div className="navbar__container-icon-grid-item">
                <ToolTipIconButton tooltipTitle="Call me">
                  <PhoneIcon />
                </ToolTipIconButton>
              </div>
              <div className="navbar__container-icon-grid-item">
                <ToolTipIconButton tooltipTitle="Email me">
                  <EmailIcon />
                </ToolTipIconButton>
              </div>
              <div className="navbar__container-icon-grid-item">
                <ToolTipIconButton
                  tooltipTitle="Toggle Light / Dark Mode"
                  onClick={onThemeToggle}
                >
                  {themeMode === 'dark' ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )}
                </ToolTipIconButton>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default NavBar;
