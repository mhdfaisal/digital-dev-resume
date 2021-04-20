import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Home from './pages/Home';
import { ThemeContext, ThemeModeType } from './context/ThemeContext';

/**
 * The root component / container of the application
 */
const App: React.FC = () => {
  // check for existing mode in local storage
  const existingMode =
    window.localStorage.getItem('digital-dev-resume-v-mode') || 'light';
  // state for light/dark mode toggle
  const [themeMode, setThemeMode] = useState<ThemeModeType>(
    existingMode as ThemeModeType
  );

  /**
   * Method to trigger theme change
   */
  const toggleThemeMode = () => {
    setThemeMode((prevMode) => {
      const newMode = prevMode === 'dark' ? 'light' : 'dark';
      // persist mode in local storage
      window.localStorage.setItem('digital-dev-resume-v-mode', newMode);
      return newMode;
    });
  };

  // Material-ui theme override
  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: {
        main: themeMode === 'light' ? '#0a558d' : '#000',
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
