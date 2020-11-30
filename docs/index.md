## Steps

Did an install of https://squidfunk.github.io/mkdocs-material/getting-started/ 

- Used pip3
- Removed /site, and need to make it a .gitignore
- put into name.github.io
- Add GitHub Action
- Set .io to gh-pages branch
- Need to set .com from .io

`pip3` not pip on mac to insure use of python version 3

/site gets ignored so you can build locally, and not put the local builds into the repository

name.io is for hosting via github

.io to that branch allows the Action to build on commit, and then keep them in a separate branch

Once built and happy, switch resolution to the dot-com


I'm now using docker desktop to do a preview - which is optional.

`docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material`

Setting the nav to be anything other than alphabetical:

```material
nav:
  - index.md
  - unit_testing.md
  - typography.md
```
