# alfred-bitbucket

![alt text](alfred-bitbucket.gif)

## Installation

```
npm install --global alfred-bitbucket
```

When installing `alfred-bitbucket` an `info.plist` file is created. You will need to fill in your personnal info.

## Configuration

### Generate Bitbucket consumer

1. Go to your personal **Bitbucket's settings**.
2. Under **Access management**, click on **OAuth**
3. At the bottom of the page you have a **Add consumer** button.
4. Check **This is a private consumer** to allow client_credentials grant type
5. Give it a name. Make sure to check the following **Read** access
    - Account
    - Team membership
    - Repositories
    - Pull requests
    - Issues
6. Save it
7. Your new consumer should appear under the **OAuth consumers** section. Toggle it to see the **Key** and the **Secret**.

### Register environment variables

Since 1.0.3, `info.plist` file is git ignored and copied on installation from an example file. But keep ensuring that you don't push any personnal information.

#### Through Alfred

1. Open Alfred workflow's builder.
2. Open the Environment variable panel and fill the values
    - `clientId` : Consumer Key
    - `secret` : Consumer secret
3. Save

#### Through the `plist` file.

1. Open the `info.plist` file.
2. Go down the file to the `variables` key.
3. Fille the values
    - `clientId` : Consumer Key
    - `secret` : Consumer secret
4. Save

## Usage

### `bit` command
Open alfred and type `bit`. Select a team and you can :
- **New** open bookmarked repostories
- Enter to see the Team's projects
- Cmd+Enter to open the Team's page
- **New** Shift+Enter to mark a team/user as default


### `repo` command

If you set a default team with Shift+Enter on any team/user, this user we be load by default. If you selected a team using `bit` command it'll be loaded instead. Then you'll be able to do the following :
- Enter to see repo's PRs, Issues and Forks.
- Cmd+Enter to open the Repo's page
- **New** Shift+Enter to bookmark or remove bookmarked repository

### **New** `marks` command

Displays all the bookmarks you done with all the repo options :
- Pull requests (Enter, to show the PRs, Cmd+Enter to open the PRs page)
- Issues (Enter, to show the issues, Cmd+Enter to open the issues page)
- Forks (Enter, to show the forks)

### Pull requests

- ✅ : The pull request has been merged
- ❌ : The pull request has been declined
- ☑️ : The has x tasks to be resolved
- 💬 : The has x comments

# License
MIT © [Nicolas Boisvert](https://nboisvert.com)
