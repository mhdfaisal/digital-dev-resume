import React from 'react';

// type alias for theme mode type
export type ThemeModeType = 'light' | 'dark' | undefined;

// interface for ThemeContext
interface IThemeContext {
  themeMode: ThemeModeType;
  toggleThemeMode: () => void;
}

// default value for theme context
const defaultThemeValue: IThemeContext = {
  themeMode: 'light',
  toggleThemeMode: () => {},
};

/**
 * Theme context to pass theme data through the nested component tree.
 */
export const ThemeContext: React.Context<IThemeContext> = React.createContext(
  defaultThemeValue
);
