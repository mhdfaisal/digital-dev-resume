import React from 'react';

// type for repositories commits ref node object
export type RefNode = {
  name: 'string';
  target: {
    history: {
      totalCount: number;
    };
    messageHeadline: string;
    pushedDate: string;
  };
};

// type for repository topics node.
export type RepositoryTopicsNode = {
  topic: {
    name: string;
  };
};

// type for pinned item edge object.
export type NodeType = {
  description: string;
  diskUsage: number;
  forkCount: number;
  homepageUrl: string;
  id: string;
  name: string;
  openGraphImageUrl: string;
  primaryLanguage: {
    color: string;
    name: string;
  };
  pushedAt: string;
  refs: {
    nodes: Partial<RefNode>[];
  };
  repositoryTopics: {
    nodes: Partial<RepositoryTopicsNode>[];
  };
  stargazers: {
    totalCount: number;
  };
  url: string;
  useCustomOpenGraphImage: boolean;
};

// type for an array of pinned item edges.
export type NodeArr = {
  node: Partial<NodeType>[];
};

// type for github user object
export type GithubUser = {
  avatarUrl: string;
  bio: string;
  company: string;
  isHireable: string;
  location: string;
  name: string;
  status: {
    emojiHTML: string;
    message: string;
  };
  url: string;
  pinnedItems: {
    totalCount: number;
    edges: NodeArr[];
  };
  repositories: {
    nodes: Partial<NodeType>[];
  };
};

export interface IGithubProfileContext {
  isLoading: boolean;
  error: string;
  user: Partial<GithubUser>;
}

// default value for user object
const providerUserDefaultValue: Partial<GithubUser> = {};

// default value for github profile context provider
const providerDefaultValue: Partial<IGithubProfileContext> = {
  isLoading: false,
  error: '',
  user: providerUserDefaultValue,
};

/**
 * Context to provide github user data to the components
 * enclosed within it's provider and avoid props drilling.
 */
const GithubProfileContext: React.Context<Partial<IGithubProfileContext>> =
  React.createContext(providerDefaultValue);

export default GithubProfileContext;
