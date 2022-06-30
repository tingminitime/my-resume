set -e

npm run build

cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f https://github.com/tingminitime/my-resume.git main:gh-pages
cd -
