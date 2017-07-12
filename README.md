# alfred-bitbucket

## Installation

```
npm install --global alfred-bitbucket
```

## Configuration

### Generate Bitbucket consumer

1. Go to your personal **Bitbucket's settings**.
2. Under **Access management**, click on **OAuth**
3. At the bottom of the page you have a **Add consumer** button.
4. Give it a name. Make sure to check the following **Read** access
    - Account
    - Team membership
    - Repositories
    - Pull requests
    - Issues
5. Save it
6. Your new consumer should appear under the **OAuth consumers** section. Toggle it to see the **Key** and the **Secret**.

### Register environment variables

**IMPORTANT** If you want to PR, or share your workflow with someone, **don't forget to remove your credentials**.

#### Through Alfred

1. Open Alfred workflow's builder.
2. Open the Environment variable panel and fill the values
    - `clientId` : Consumer Key
    - `secret` : Consumer secret
    - `username` : Bitbucket account username
    - `password` : Bitbucket account password
3. Save

#### Through the `plist` file.

1. Open the `info.plist` file.
2. Go down the file to the `variables` key.
3. Fille the values
    - `clientId` : Consumer Key
    - `secret` : Consumer secret
    - `username` : Bitbucket account username
    - `password` : Bitbucket account password
4. Save

## Usage

Open alfred and type `bit`. Select a team and you can :
- Enter to see the Team's projects
- Cmd+Enter to open the Team's page

If you Selected a team with Enter, repos will be shown then you can :
- Enter to see repo's PRs, Issues and Forks.
- Cmd+Enter to open the Repo's page

If you Selected a repo with Enter, then you have 3 options :
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
