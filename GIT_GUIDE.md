# Viewing Older Versions of the Code

Because this project uses Git for version control, the older codebase (before the consolidation and upgrade to Anime.js v4.0) is permanently preserved in the commit history.

If you ever want to see exactly how the `super-quiz-animeJs-3.2` code looked *before* the upgrade, you can use the `git checkout` command to "time travel" back to that state.

## Step-by-Step Instructions

1. **Open your terminal** and navigate to this project folder.

2. **Look at the commit history** by running:
   ```bash
   git log --oneline
   ```
   You will see a list of commits that looks something like this:
   ```text
   fc2b191 (HEAD -> main, origin/main) Upgrade Anime.js to v4.0 and consolidate codebase
   b06b6a6 Rewrite README to a professional portfolio standard
   4f840cf Update README and add .gitignore
   ```

3. **Check out an older commit**. To look at the code exactly as it was right before the Anime.js v4.0 upgrade, you want to jump back to the `"Rewrite README to a professional portfolio standard"` commit. Copy that commit's 7-character hash (`b06b6a6` in the example above) and run:
   ```bash
   git checkout b06b6a6
   ```

Your code files on your computer will instantly rewind to exactly how they looked at that moment in time! You can run the app, read the old code, or test things out safely without breaking anything.

## Returning to the Present

When you're done looking at the old code and want to return back to the new v4.0 code, simply tell Git to check out the main branch again:

```bash
git checkout main
```

Everything will immediately flip right back to the new code. Git allows you to safely explore your project's history without losing any of your current progress!
