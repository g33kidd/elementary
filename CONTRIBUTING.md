# Contributing

### Want To Add a Feature?

You can request a new feature by submitting an issue within our GitHub Repository or if you would like to implement a new feature then:

1. Fork the main [repository](https://github.com/g33kidd/cmstest).
2. Create a new Git branch that follows the naming conventions mentioned below.
  * *Feature branches should always be created from the `develop` branch.*
3. Make your code changes, and write any necessary test cases.
4. Run `npm test` to make sure all of the tests are passing, your new test cases and any previously added test cases.
5. Commit your changes and push to your forked repository.
6. Create a Pull Request to merge your changes into the `develop` branch within the main repository.

### Creating Hotfixes For Current Releases

As with a feature, you can request a hotfix by submitting an issue within our GitHub Repository or, if you would like, can implement the hotfix by following these steps:

1. Fork the main [repository](https://github.com/g33kidd/cmstest).
2. Create a new Git branch with the conventions `hotfix/<name of branch>`.
  * *Hotfix branches should always be created from the `master` branch.*
3. Make your code changes, and write/fix any necessary test cases.
4. Run `npm test` to make sure all of the tests are passing.
5. Commit your changes and push to your forked repository.
6. Create a Pull Request to merge your changes into the `master` branch within the main repository.

### JavaScript Coding Styling

When creating a new feature, make sure to follow the project's set coding style guidelines, you can find them [here](https://github.com/airbnb/javascript).  If your code doesn't adhere to the guidelines, provided in the above link, there is a good chance your code will not be merged into the core repository.

### Git Branch Naming Conventions

Branches, other than `develop` and `master` should follow one of the following naming schemes.

* Added Features: `feature/<name of branch>`
* Bug Fixes: `hotfix/<name of branch>`
* Documentation Changes: `doc/<name of branch>`
* Style Changes: `style/<name of branch>`
  * Any changes that are specifically made to white-spacing, formatting, etc.
* Tests: `test/<name of branch>`
  * Any changes that *only* add/remove test cases.
