https://stackoverflow.com/questions/20045946/applying-the-changes-from-branch-b-to-a-without-merging-or-adding-commits
```bash
git merge --no-commit --squash branchA
git reset HEAD # to unstage the changes
```