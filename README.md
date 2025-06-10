# workshop-git

Fix the typo detected by the test without creating a separate commit for the fix.

```bash
git checkout step-3
yarn run test # should fail with a typo in greet function

# fix the typo in src/greet.js

git add src/greet.js
git commit --fixup=COMMIT_HASH # replace COMMIT_HASH with the hash of the commit that introduced the typo
git rebase -i --autosquash COMMIT_HASH_PREVIOUS # replace COMMIT_HASH_PREVIOUS with the hash of the commit before the one that introduced the typo

yarn run test # should pass
```

Go to [step-4](https://github.com/saybou/workshop-git/blob/step-4/README.md)
