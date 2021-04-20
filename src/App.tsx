import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Home from './pages/Home';
import { ThemeContext, ThemeModeType } from './context/ThemeContext';
import { PALETTE_PRIMARY } from './utils/constants/colors-codes';
import { THEME_MODES } from './utils/constants/theme-modes';

/**
 * The root component / container of the application
 */
const App: React.FC = () => {
  // check for existing mode in local storage
  const existingMode =
    window.localStorage.getItem('digital-dev-resume-v-mode') ||
    THEME_MODES.light;
  // state for light/dark mode toggle
  const [themeMode, setThemeMode] = useState<ThemeModeType>(
    existingMode as ThemeModeType
  );

  /**
   * Method to trigger theme change
   */
  const toggleThemeMode = () => {
    setThemeMode((prevMode) => {
      const newMode =
        prevMode === THEME_MODES.dark
          ? (THEME_MODES.light as ThemeModeType)
          : (THEME_MODES.dark as ThemeModeType);
      // persist mode in local storage
      window.localStorage.setItem(
        'digital-dev-resume-v-mode',
        newMode as string
      );
      return newMode;
    });
  };

  // Material-ui theme override
  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: {
        main:
          themeMode === THEME_MODES.light
            ? PALETTE_PRIMARY.light
            : PALETTE_PRIMARY.dark,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
        <Paper>
          <Home />
        </Paper>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
