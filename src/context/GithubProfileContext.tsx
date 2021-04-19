import React from 'react';

/**
 * Context to provide github user data to the components
 * enclosed within it's provider and avoid props drilling.
 */
const GithubProfileContext: React.Context<{}> = React.createContext({});

export default GithubProfileContext;
