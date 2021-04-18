const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

/**
 * An IIFE that queries the Github GraphQL API using the axios client
 * and writes the data received from the API in a file at location
 * public/github-profile.json inside the current project directory.
 *
 * @throws {Error} If the GITHUB_USERNAME or GITHUB_USERNAME is undefined or the
 * network request fails or any error while writing to the file system.
 */
(() => {
  // credentials from env file
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
  const { GITHUB_USERNAME, GITHUB_GRAPHQL_API_URL } = process.env;

  if (GITHUB_USERNAME === undefined) {
    throw new Error('GITHUB_USERNAME env variable not found');
  }

  if (GITHUB_GRAPHQL_API_URL === undefined) {
    throw new Error('GITHUB_GRAPHQL_API_URL env variable not found');
  }
  console.log(`Fetching github profile for ${GITHUB_USERNAME}`);

  // graphql query
  const data = JSON.stringify({
    query: `
{
user(login: "mhdfaisal") {
    name
    bio
    url
    isHireable
    avatarUrl
    location
    status {
      emojiHTML
      message
    }
    company
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
        node {
          ... on Repository {
            name
            description
            forkCount
            stargazers {
              totalCount
            }
            homepageUrl
            pushedAt
            openGraphImageUrl
            usesCustomOpenGraphImage
            refs(refPrefix: "refs/heads/", last: 3) {
              nodes {
                name
                target {
                  ... on Commit {
                    history {
                      totalCount
                    }
                    messageHeadline
                    pushedDate
                  }
                }
              }
            }
            repositoryTopics(first: 6) {
              nodes {
                topic {
                  name
                }
              }
            }
            url
            id
            diskUsage
            primaryLanguage {
              name
              color
            }
          }
        }
      }
    }
    repositories(orderBy: {field: PUSHED_AT, direction: ASC}, last: 3, privacy: PUBLIC, isFork: false) {
      nodes {
        name
        description
        forkCount
        stargazers {
          totalCount
        }
        homepageUrl
        pushedAt
        openGraphImageUrl
        usesCustomOpenGraphImage
        refs(refPrefix: "refs/heads/", last: 3) {
          nodes {
            name
            target {
              ... on Commit {
                history {
                  totalCount
                }
                messageHeadline
                pushedDate
              }
            }
          }
        }
        repositoryTopics(first: 6) {
          nodes {
            topic {
              name
            }
          }
        }
        url
        id
        diskUsage
        primaryLanguage {
          name
          color
        }
      }
    }
  }
}
`,
  });

  // making a network request using axios client
  axios({
    url: GITHUB_GRAPHQL_API_URL,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      'User-Agent': 'Node',
    },
    method: 'post',
    data,
  })
    .then((result) => {
      // writing the API response to a file.
      fs.writeFile(
        './public/github-profile.json',
        JSON.stringify(result.data),
        (err) => {
          // throw an error
          if (err) return console.log(err);
          console.log('saved file to public/github-profile.json');
        }
      );
    })
    .catch((err) => {
      // throw an error
      throw err;
    });
})();
