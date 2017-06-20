# My personal website
[![Build Status](https://travis-ci.org/mateiradu/personal-website.svg?branch=master)](https://travis-ci.org/mateiradu/personal-website) [![bitHound Dependencies](https://www.bithound.io/github/mateiradu/personal-website/badges/dependencies.svg)](https://www.bithound.io/github/mateiradu/personal-website/master/dependencies/npm) [![codebeat badge](https://codebeat.co/badges/483c56f4-4901-4a1e-a640-d92399c0a9da)](https://codebeat.co/projects/github-com-mateiradu-personal-website-master) [![](https://img.shields.io/badge/Bootstrap-v4.0.0--alpha.6-yellow.svg?colorB=563d7c)](https://v4-alpha.getbootstrap.com/)

My personal landing page showcasing my portfolio, available at <https://mateiradu.me>.

## Build instructions
1. Make sure you have [Node.js](https://nodejs.org/en/) installed.
2. Clone the repo `git clone https://github.com/mateiradu/personal-website`.
3. Navigate into the cloned repo `cd personal-website`.
4. Install the dependencies `npm install`.
5. Start the development build `npm start`.
6. Start personalizing! `src/Constants.js` and `src/index.css` are a good starting point.

Your site should be running on [localhost:3000](http://localhost:3000) and in any case, when running `npm start`, the console should show you the correct address.

### Note for Travis CI
As currently configured, the current `.travis.yml` script will trigger `scripts/deploy.sh` upon build success. The latter will deploy a production build to an existing Netlify site.

Consider editing these scripts according to your needs and pipeline.

## Dependencies
This website uses the following frameworks and tools:

* [Bootstrap v4](https://v4-alpha.getbootstrap.com/)
* [Node.js](https://nodejs.org/en/) for `npm`
* [React](https://facebook.github.io/react/), with
  * `react`
  * `react-dom`
  * `react-scripts`

## License
[MIT](https://github.com/mateiradu/personal-website/blob/master/LICENSE) License

Copyright (c) 2016-2017 Matei Bogdan Radu.