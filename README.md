# markdown-it-synapse-heading

[![Build Status](https://img.shields.io/travis/jay-hodgson/markdown-it-synapse-heading/master.svg?style=flat)](https://travis-ci.org/jay-hodgson/markdown-it-synapse-heading)
[![NPM version](https://img.shields.io/npm/v/markdown-it-synapse-heading.svg?style=flat)](https://www.npmjs.org/package/markdown-it-synapse-heading)
[![Coverage Status](https://img.shields.io/coveralls/jay-hodgson/markdown-it-synapse-heading/master.svg?style=flat)](https://coveralls.io/r/jay-hodgson/markdown-it-synapse-heading?branch=master)

> Heading plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser that supports Synapse requirements.  More specifically, in a SPA where the html page fragment identifier has been hijacked for GWT places/activities, our Table Of Contents widget must rely on js to jump to Headings discovered in the html output.

__v1.+ requires `markdown-it` v5.+, see changelog.__

`# Heading 1` => `<h1 toc>Heading 1</h1>`
`#Heading 1` => `<h1 toc>Heading 1 (space after syntax is optional)</h1>`
`#! Heading 1` => `<h1>Heading 1</h1>`

## Install

node.js, browser:

```bash
npm install markdown-it-synapse-heading --save
bower install markdown-it-synapse-heading --save
```

## Use

```js
var md = require('markdown-it')()
            .use(require('markdown-it-synapse-heading'));

md.render('# Heading 1') // => '<h1 toc>Heading 1</h1>'

```

The widgetparams can be used to determine what kind of html widget should be rendered in the output container.

_Differences in browser._ If you load script directly into the page, without
package system, module will add itself globally as `window.markdownitSynapseHeading`.


## License
[MIT](https://github.com/jay-hodgson/markdown-it-synapse-heading/blob/master/LICENSE)
