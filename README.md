[![Travis CI](https://travis-ci.com/scriptex/universal-github-client.svg?branch=master)](https://travis-ci.com/scriptex/universal-github-client)
[![Github Build](https://github.com/scriptex/universal-github-client/workflows/Build/badge.svg)](https://github.com/scriptex/universal-github-client/actions?query=workflow%3ABuild)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/34d3d75710534dc6a38c3584a1dcd068)](https://www.codacy.com/gh/scriptex/universal-github-client/dashboard?utm_source=github.com&utm_medium=referral&utm_content=scriptex/universal-github-client&utm_campaign=Badge_Grade)
[![Codebeat Badge](https://codebeat.co/badges/d765a4c8-2c0e-44f2-89c3-fa364fdc14e6)](https://codebeat.co/projects/github-com-scriptex-universal-github-client-master)
[![CodeFactor Badge](https://www.codefactor.io/repository/github/scriptex/universal-github-client/badge)](https://www.codefactor.io/repository/github/scriptex/universal-github-client)
[![DeepScan grade](https://deepscan.io/api/teams/3574/projects/5257/branches/40799/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=3574&pid=5257&bid=40799)
[![Analytics](https://ga-beacon-361907.ew.r.appspot.com/UA-83446952-1/github.com/scriptex/universal-github-client/README.md?pixel)](https://github.com/scriptex/universal-github-client/)

# Universal Github Client

> A Github API Client for the browser and Node JS

## Visitor stats

![GitHub stars](https://img.shields.io/github/stars/scriptex/universal-github-client?style=social)
![GitHub forks](https://img.shields.io/github/forks/scriptex/universal-github-client?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/scriptex/universal-github-client?style=social)
![GitHub followers](https://img.shields.io/github/followers/scriptex?style=social)

## Code stats

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/scriptex/universal-github-client)
![GitHub repo size](https://img.shields.io/github/repo-size/scriptex/universal-github-client?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/scriptex/universal-github-client?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/scriptex/universal-github-client?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/universal-github-client?style=plastic)

## Installation and getting started

First install the package

```sh
npm i universal-github-client

# or

yarn add universal-github-client
```

Then you need to generate a new token from your [Github profile](https://github.com/settings/tokens) and make sure that this token has access to the relevant scopes that you plan to query the API for.

Then you need to configure and setup your Github Client instance:

### In Node

Node prior to v17.5.0 and v16.5.0 does not include the `fetch` API so you might need to install a polyfill in order to use this module in Node.

```sh
npm i node-fetch

# or

yarn add node-fetch
```

Node v16.5.0 and v17.5.0 include the `fetch` API but behind the `--experimental-fetch` CLI flag.

Node v18.0.0 no longer requires the `--experimental-fetch` CLI  flag but the `fetch` API is still marked as "experimental".

Node v21.0.0 comes with a stable version of the `fetch` API.

More about the history of the `fetch` API and its usage in Node can be found [in the official documentation](https://nodejs.org/docs/latest/api/globals.html#fetch).

```javascript
const fetch = require('node-fetch');
const { GithubClient } = require('universal-github-client');

const client = new GitHubClient({
	base: 'https://api.github.com',
	token: 'YOUR_GITHUB_TOKEN_HERE',
	fetch
});
```

### In browser

Please note that this package is supported by browsers which implement natively the Fetch API and have support for Promises.
If you are using an outdated browser, you need to install a polyfill for Fetch and Promises.

```javascript

import { GithubClient } = from 'universal-github-client';

const client = new GitHubClient({
	base: 'https://api.github.com',
	token: 'YOUR_GITHUB_TOKEN_HERE',
	fetch
});
```

## Usage

When you have installed and configured the `client`, you can make calls to the [Github API](https://developer.github.com/v3/):

You can use the paths defined in the [Github API](https://developer.github.com/v3/) documentation.

For example, if you want to [get the repositories](https://developer.github.com/v3/repos/#list-repositories-for-a-user) for a user you need to do the following:

```javascript
const repos = client.get({ path: '/users/scriptex/repo' }); // scriptex is the Github user name
```

There are five different instance methods based on the HTTP method required by a particular endpoint in the Github API.

```javascript
client.get({ path });

client.post({ path, data });

client.delete({ path });

client.put({ path, data });

client.patch({ path, data });
```

## LICENSE

MIT

---

<div align="center">
    Connect with me:
</div>

<br />

<div align="center">
    <a href="https://atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/logo.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="mailto:hi@atanas.info">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/email.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.linkedin.com/in/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linkedin.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://github.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/github.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://gitlab.com/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/gitlab.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://twitter.com/scriptexbg">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/twitter.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.npmjs.com/~scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/npm.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://www.youtube.com/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/youtube.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://stackoverflow.com/users/4140082/atanas-atanasov">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/stackoverflow.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://codepen.io/scriptex/">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codepen.svg" width="20" alt="">
    </a>
    &nbsp;
    <a href="https://profile.codersrank.io/user/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/codersrank.svg" height="20" alt="">
    </a>
    &nbsp;
    <a href="https://linktr.ee/scriptex">
        <img src="https://raw.githubusercontent.com/scriptex/socials/master/styled-assets/linktree.svg" height="20" alt="">
    </a>
</div>

---

<div align="center">
Support and sponsor my work:
<br />
<br />
<a href="https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20developer%20profile%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome" title="Tweet">
	<img src="https://img.shields.io/badge/Tweet-Share_my_profile-blue.svg?logo=twitter&color=38A1F3" />
</a>
<a href="https://paypal.me/scriptex" title="Donate on Paypal">
	<img src="https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?logo=paypal&color=222d65" />
</a>
<a href="https://revolut.me/scriptex" title="Donate on Revolut">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/revolut.json" />
</a>
<a href="https://patreon.com/atanas" title="Become a Patron">
	<img src="https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?logo=patreon&color=e64413" />
</a>
<a href="https://ko-fi.com/scriptex" title="Buy Me A Coffee">
	<img src="https://img.shields.io/badge/Donate-Buy%20me%20a%20coffee-yellow.svg?logo=ko-fi" />
</a>
<a href="https://liberapay.com/scriptex/donate" title="Donate on Liberapay">
	<img src="https://img.shields.io/liberapay/receives/scriptex?label=Donate%20on%20Liberapay&logo=liberapay" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" title="Donate Bitcoin">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/bitcoin.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" title="Donate Etherium">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/etherium.json" />
</a>
<a href="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" title="Donate Shiba Inu">
	<img src="https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/scriptex/scriptex/master/badges/shiba-inu.json" />
</a>
</div>
