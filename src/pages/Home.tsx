import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import axios, { AxiosError } from 'axios';

import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';
import EducationAndWork from '../components/EducationAndWork/EducationAndWork';
import PinnedRepos from '../components/PinnedRepos/PinnedRepos';
import RecentActivites from '../components/RecentActivites/RecentActivities';
import Footer from '../components/Footer/Footer';
import GithubProfileContext from '../context/GithubProfileContext';

import { HOME_CONTAINER } from '../utils/constants/colors-codes';
import { THEME_MODES } from '../utils/constants/theme-modes';

/**
 * Link a style sheet to the Home component using the hook pattern.
 */
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    borderRadius: 0,
    flexDirection: 'column',
    alignSelf: 'stretch',
    height: '100%',
    backgroundColor:
      theme.palette.type === THEME_MODES.dark
        ? HOME_CONTAINER.background.dark
        : HOME_CONTAINER.background.light,
  },
}));

/**
 * The main container component that encapsulate all the other components
 * and can be considered as the home page of the App.
 */
const Home: React.FC = () => {
  const classes = useStyles();
  // state variable and method to hold and set github user profile data.
  //! Todo replace useState with useReducer implementation for a cleaner approach
  const [gitHubProfileData, setGithubProfileData] = useState(() => ({
    isLoading: false,
    error: '',
    user: {},
  }));

  /**
   * Fetches the github profile data from github-profile.json in /public directory
   * using axios client and set it inside the component state.
   *
   */
  const getGithubProfileData = async () => {
    try {
      setGithubProfileData((prevGithubProfileData) => ({
        ...prevGithubProfileData,
        isLoading: true,
        error: '',
        user: {},
      }));
      const result = await axios.get(
        `${process.env.PUBLIC_URL}/github-profile.json`
      );
      const user = result?.data?.data?.user ?? {};
      // set the user data inside state
      setGithubProfileData((prevGithubProfileData) => ({
        ...prevGithubProfileData,
        isLoading: false,
        error: '',
        user: { ...user },
      }));
    } catch (err) {
      const errors = err as Error | AxiosError;
      console.log(err);
      // set error message inside the state
      setGithubProfileData((prevGithubProfileData) => ({
        ...prevGithubProfileData,
        isLoading: false,
        error: errors?.message ?? '',
        user: {},
      }));
    }
  };

  /**
   * effect to call a function to fetch user github profile on mount.
   */
  useEffect(() => {
    getGithubProfileData();
  }, []);

  return (
    <Paper elevation={0} className={classes.root}>
      <GithubProfileContext.Provider value={{ ...gitHubProfileData }}>
        <Header />
        <Profile />
        <EducationAndWork />
        <PinnedRepos />
        <RecentActivites />
        <Footer />
      </GithubProfileContext.Provider>
    </Paper>
  );
};

export default Home;
