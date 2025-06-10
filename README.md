# workshop-git

Code Review: Handle the case where `name` is missing by using a default parameter.

```bash
git checkout step-4

# edit src/greet.js to add a default parameter to the greet function

git add src/greet.js
git commit --fixup COMMIT_HASH # replace COMMIT_HASH with the hash of the commit which implemented the greet function

# add a new unit test to cover the case where `name` is missing

yarn run test # should pass

git add src/__tests__/greet.test.js
git commit --fixup COMMIT_HASH # replace COMMIT_HASH with the hash of the commit which added the test for the greet function

git rebase -i --autosquash COMMIT_HASH_PREVIOUS # replace COMMIT_HASH_PREVIOUS with the hash of a commit before all commit you fixed up
```

Go to [step-5](https://github.com/saybou/workshop-git/blob/step-5/README.md)
