import React from 'react';

// type for repositories commits ref node object
type RefNode = {
  name?: 'string';
  target?: {
    history?: {
      totalCount?: number;
      messageHeadline?: string;
      pushedDate?: string;
    };
  };
};

// type for repository topics node.
type RepositoryTopicsNode = {
  topic?: {
    name?: string;
  };
};

// type for pinned item edge object.
type NodeType = {
  description?: string;
  diskUsage?: number;
  forkCount?: number;
  homepageUrl?: string;
  id?: string;
  name?: string;
  openGraphImageUrl?: string;
  primaryLanguage?: {
    color?: string;
    name?: string;
  };
  pushedAt?: string;
  refs?: {
    nodes?: RefNode[];
  };
  repositoryTopics?: {
    nodes: RepositoryTopicsNode[];
  };
  stargazers?: {
    totalCount?: number;
  };
  url?: string;
  useCustomOpenGraphImage?: boolean;
};

// type for an array of pinned item edges.
type NodeArr = {
  node: NodeType[];
};

// type for github user object
type GithubUser = {
  avatarUrl?: string;
  bio?: string;
  company?: string;
  isHireable?: string;
  location?: string;
  name?: string;
  status?: {
    emojiHTML?: string;
    message?: string;
  };
  url?: string;
  pinnedItems?: {
    totalCount?: number;
    edges?: NodeArr[];
  };
  repositories?: {
    nodes?: NodeType[];
  };
};

export interface IGithubProfileContext {
  isLoading: boolean;
  error: string;
  user?: GithubUser;
}

// default value for user object
const providerUserDefaultValue: GithubUser = {};

// default value for github profile context provider
const providerDefaultValue: IGithubProfileContext = {
  isLoading: false,
  error: '',
  user: providerUserDefaultValue,
};

/**
 * Context to provide github user data to the components
 * enclosed within it's provider and avoid props drilling.
 */
const GithubProfileContext: React.Context<IGithubProfileContext> = React.createContext(
  providerDefaultValue
);

export default GithubProfileContext;
