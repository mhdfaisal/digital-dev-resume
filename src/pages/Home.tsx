import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../components/Header/Header';
import Profile from '../components/Profile/Profile';
import EducationAndWork from '../components/EducationAndWork/EducationAndWork';
import PinnedRepos from '../components/PinnedRepos/PinnedRepos';
import FeaturedRepos from '../components/FeaturedRepos/FeaturedRepos';

/**
 * Link a style sheet to the Home component using the hook pattern.
 */
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'stretch',
    height: '100%',
  },
}));

/**
 * The main container component that encapsulate all the other components
 * and can be considered as the home page of the App.
 */
const Home: React.FC = () => {
  const classes = useStyles();
  return (
    <Paper elevation={0} className={classes.root}>
      <Header />
      <Profile />
      <EducationAndWork />
      <PinnedRepos />
      <FeaturedRepos />
    </Paper>
  );
};

export default Home;
