# alfred-bitbucket

![alt text](alfred-bitbucket.gif)

## Installation

```
npm install --global alfred-bitbucket
```

When installing `alfred-bitbucket`, an `alfred-bitbucket/info.plist` file is created inside your global `node_modules` directory. This file will be used to save your Bitbucket secret and clientId. See the [Configuration](#configuration) section.

## Configuration

### Generate Bitbucket consumer

1. Go to your personal **Bitbucket's settings**.
2. Under **Access management**, click on **OAuth**.
3. At the bottom of the page, click the **Add consumer** button.
4. Check **This is a private consumer** to allow client_credentials grant type.
5. Give it a name.
6. In the `Callback URL` field you need to set a URL. This will **not** be used, but it is required in order to get an acces token. Any will do, just make sure it has `http://` or `https://` scheme. You can set it to `https://google.ca` or `https://github.com` or really anything.
7. Make sure to check the following **Read** access.
    - Account
    - Team membership
    - Repositories
    - Pull requests
    - Issues
8. Save it.
9. Your new consumer should appear under the **OAuth consumers** section. Toggle it to see the **Key** and the **Secret**.

### Register environment variables

Since 1.0.3, `info.plist` file is git ignored and copied on installation from an example file. But keep ensuring that you don't push any personal information.

You can add the required keys either through Alfred `or` directly through the `plist` file.

#### Through Alfred

1. Open Alfred Preferences.
2. Go to the Workflows tab.
3. Select BitBucket.
4. Open the variables panel by clicking the `Configure workflow and variables` button on the right.
5. Fill the values
    - `clientId` : Consumer Key
    - `secret` : Consumer secret
6. Save

#### Through the `plist` file.

1. Open the `info.plist` file.
2. Go down the file to the `variables` key.
3. Fill the following values.
    - `clientId` : Consumer Key
    - `secret` : Consumer secret
4. Save.

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

# License
MIT © [Nicolas Boisvert](https://nboisvert.com)
