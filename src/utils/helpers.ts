import { RepositoryTopicsNode } from '../context/GithubProfileContext';

/**
 * Extract topic names from an array of RepositoryTopicsNode[] and
 * attach id and other additional properties to them.
 * @param repositoryTopicsNodes - an array of type RepositoryTopicsNode.
 *
 * @returns topicsWithColors - an array of type { name: string; id: number }.[]
 */
export const getRepoTopicsArr = (
  repositoryTopicsNodes: Partial<RepositoryTopicsNode>[]
) => {
  const topicsWithColors: { name: string; id: number }[] = [];
  repositoryTopicsNodes.forEach((topic, index) => {
    const topicName = topic?.topic?.name ?? '';
    if (topicName) {
      topicsWithColors.push({ name: topicName, id: index });
    }
  });
  return topicsWithColors;
};

/**
 * A utility method to open a URL in a new tab.
 * @param url - The URL to open in a new tab.
 */
export const openInNewTab = (url: string) => {
  window.open(url, '_blank');
};
