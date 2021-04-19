import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Home from './pages/Home';
import { ThemeContext, ThemeModeType } from './context/ThemeContext';

/**
 * The root component / container of the application
 */
const App: React.FC = () => {
  // state for light/dark mode toggle
  const [themeMode, setThemeMode] = useState<ThemeModeType>('light');

  /**
   * Method to trigger theme change
   */
  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  // Material-ui theme override
  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: {
        main: themeMode === 'light' ? '#bd5d38' : '#000',
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
