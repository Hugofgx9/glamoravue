#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
echo 'glamoravue.hugofaugeroux.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Hugofgx9/glamoravue.git master:gh-pages
cd -