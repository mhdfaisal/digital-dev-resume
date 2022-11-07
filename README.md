# 🖥️ Digital Dev Resume

## A fully functional responsive Digital Resume for Developers.

Just change the data for fields in `src/assets/portfolio-info.ts` to get your own personal digital resume.

## Table of Contents

- [Sections](#sections)
- [How to Use](#how-to-use)
- [Linking digital resume with Github](#linking-digital-dev-resume-to-github)
- [Changing static information](#change-static-information)
- [Deployment](#deployment)

## Sections

✔️ About\
✔️ Education & Work Experience\
✔️ Pinned Repositories (Repos pinned by you in your Github account)\
✔️ Recently Active Repositories (Repos recently being committed upon)\
✔️ Footer

## Getting Started

Setting up locally for development and testing purposes.

Make sure you have [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your system.

## How To Use

From your command line, clone and run digital-dev-resume:

```bash
# Clone this repository
$ git clone https://github.com/mhdfaisal/digital-dev-resume.git

# change into the repository
$ cd digital-dev-resume

# Install dependencies
$ yarn install

#Start development server
$ yarn start
```

## Linking Digital Dev Resume to Github

Generate a Github personal access token by following these [instructions](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) (no need to select any scopes for this token).

1. Create a copy of the .env.example file in the root directory and rename the copied file to .env .

2. Enter the required values in the .env file as below -

```env
// .env
REACT_APP_GITHUB_TOKEN = "YOUR GITHUB TOKEN HERE"
GITHUB_USERNAME = "YOUR GITHUB USERNAME HERE"
```

## Change Static information

#### Just change the data for fields in `src/assets/portfolio-info.ts` to get your own personal digital resume.

## Deployment

Deploy on Github Pages by following the docs - [Deploying on Github Pages](https://create-react-app.dev/docs/deployment/#github-pages) docs for React.

#### Deploying using GitHub Actions (Recommended)

The data is fetched from github only once at the time of deployment. If we want our digital resume to stay updated with our new activities on github, we would need to redeploy it. So we can make use of a [CRON Job](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#scheduled-events) in our workflow to redeploy it twice or thrice in a week, so that it stay's updated with our github profile.

Docs for configuring and managing workflows - [Github Actions Configuring a workflow](https://docs.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow)

## Contributions

If you want to add more sections or fix some open/hidden bug, please feel free to open an [pull request](https://github.com/mhdfaisal/digital-dev-resume/pulls).
