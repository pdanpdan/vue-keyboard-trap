#!/usr/bin/env sh
set -e

yarn docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit --allow-empty -m 'deploy'
git push -f git@github.com:pdanpdan/vue-keyboard-trap.git main:gh-pages

cd -
