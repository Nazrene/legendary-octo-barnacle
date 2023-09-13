Collaborating on GitHub involves using Git commands and GitHub's features to work on a shared codebase with your team. Here are some common Git and GitHub commands and workflows for collaboration:

**1. Cloning a Repository:**

To start collaborating on an existing GitHub repository, you'll typically begin by cloning the repository to your local machine:

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the URL of the GitHub repository you want to clone.

**2. Creating a Feature Branch:**

It's good practice to create a separate branch for each feature or bug fix to work on. This helps isolate changes and reduces the risk of conflicts:

```bash
git checkout -b feature-branch
```

This command creates a new branch (`feature-branch`) and switches to it.

**3. Making Changes:**

Make your code changes within the feature branch. After making changes, stage and commit your work:

```bash
git add .
git commit -m "Description of your changes"
```

**4. Pushing Changes:**

Push your feature branch to the remote repository on GitHub:

```bash
git push origin feature-branch
```

This makes your changes available on GitHub for collaboration.

**5. Creating Pull Requests (PRs):**

On the GitHub website, navigate to the repository, and click the "New Pull Request" button to create a PR. Select your feature branch as the source branch and the target branch (usually `main` or `master`) where you want to merge your changes.

**6. Reviewing and Merging PRs:**

Team members can review your PR, leave comments, and discuss the changes. Once the changes are approved, you can merge the PR into the main branch.

**7. Syncing with the Main Branch:**

Regularly sync your feature branch with the latest changes from the main branch to avoid conflicts:

```bash
git checkout feature-branch
git fetch origin
git merge origin/main
```

This updates your feature branch with changes from the main branch.

**8. Handling Conflicts:**

If conflicts occur during the merge process, Git will prompt you to resolve them manually. Edit the affected files to resolve conflicts, then commit the changes and continue the merge.

**9. Fetching and Pulling:**

Periodically, update your local repository with changes from the remote repository:

```bash
git fetch origin
git pull origin main
```

This ensures your local repository is up to date.

**10. Collaborating with Forks:**

If you're collaborating on a repository you don't have direct access to, you can fork the repository on GitHub, clone your fork, and create pull requests from your fork to the original repository.

These are some of the fundamental Git and GitHub commands and workflows for collaborating on projects. Collaboration often involves additional practices such as code reviews, issue tracking, and continuous integration, depending on your team's needs and development process.