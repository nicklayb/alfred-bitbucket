# alfred-bitbucket

![alt text](alfred-bitbucket.gif)

## Installation

```
npm install --global alfred-bitbucket
```

When installing `alfred-bitbucket`, an `alfred-bitbucket/info.plist` file is created inside your global `node_modules` directory. This file will be used to save your Bitbucket secret and clientId. See the [Configuration](#configuration) section.

## Configuration

### Generate Bitbucket App Password

1. Go to your personal [**Bitbucket's settings**](https://bitbucket.org/account/settings/app-passwords/).
2. Click "Create app password"
3. Give it a label, such as "AlfredBitBucket"
4. Give it the relevant **Read** permissions
5. Click "Create"
6. Your app password should now appear. Make note of it as once you leave the page it's gone and you'll have to start the process over. 

### Register environment variables

1. Open Alfred Preferences.
2. Go to the Workflows tab.
3. Select BitBucket.
4. Open the variables panel by clicking the `Configure workflow and variables` button on the right.
5. Fill the values
    - `username`: Your BitBucket Username
    - `appPasword`: The App password you generated boce
    - `repoMaxAge`: Number of minutes list of repositories should be cached, defaults to 480
    - `userMaxAge`: Number of minutes user information should be cached, defaults to 720
    - `teamMaxAge`: Number of minutes list of teams should be cached, defaults to 720
6. Save

## Usage

### `bit` command
Open Alfred and type `bit`. Select a team. Now you can :
- Open bookmarked repositories.
- Enter to see the Team's projects.
- Cmd+Enter to open the Team's web page.
- Shift+Enter to mark a team/user as default.

### `repo` command

If you set a default team with Shift+Enter on any team/user, this user will be loaded by default. If you select a team using the `bit` command it'll be loaded instead. Then, you'll be able to do the following :
- Enter to see repo's PRs, Issues and Forks.
- Cmd+Enter to open the Repo's page.
- Shift+Enter to bookmark or remove a bookmarked repository.
- **New** Alt+Enter to copy repo's url to clipboard.

### `marks` command

Displays all the bookmarks you made with all the repos options :
- Pull requests (Enter, to show the PRs, Cmd+Enter to open the PRs web page).
- Issues (Enter, to show the issues, Cmd+Enter to open the issues web page).
- Forks (Enter, to show the forks).

### Pull requests

- ✅ : The pull request has been merged.
- ❌ : The pull request has been declined.
- ☑️ : The pull request has x tasks to be resolved.
- 💬 : The pull request has x comments.

### Pipelines

- ✅ : The pipeline ran successfully.
- ❌ : The pipeline failed.


## OAuth2 Configuration (Deprecated)

It is now preferred to configure alfred-bitbucket with App passwords, but if you need to configure it with OAuth, here are the old instructions: [Generate BitBucket Consumer](https://github.com/nicklayb/alfred-bitbucket/blob/5b3051f3b0d21da9ecff2bfc6105107cb387f11d/README.md#generate-bitbucket-consumer)

## plist Configuration (Deprecated)

It is now preferred to configure the alfred-bitbucket variables through the workflow preferences. If you need to configure directly through the plist, here are the old instructions: [Through the plist file](https://github.com/nicklayb/alfred-bitbucket/blob/5b3051f3b0d21da9ecff2bfc6105107cb387f11d/README.md#through-the-plist-file) 

# License
MIT © [Nicolas Boisvert](https://nboisvert.com)
