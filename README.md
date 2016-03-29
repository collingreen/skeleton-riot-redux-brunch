# Brunch Riot Redux Skeleton

Client side app project template built with RiotJS and Redux using Brunch.

Demonstration tags, actions, and reducer roughly from
https://github.com/avanslaars/riot-redux plus some duck-like redux module
layout and reducer composition.


## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `npm install`

* Run:
    * `brunch watch --server` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `brunch build --production` — builds minified project for production


## Quick Demo

For demo / development, you can install and run `json-server` to provide
a simple rest server on port 3000, which the example tasks actions expect. When
running both `brunch w --server` and `json-server db.json` you can load the
tasks page at localhost:3333 and add tasks with the simple form it displays.
