#!/usr/bin/env sh
set -e

yarn docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:pdanpdan/vue-keyboard-trap.git master:gh-pages

cd -
