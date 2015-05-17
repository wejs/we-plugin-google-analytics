# We.js google analytics plugin

[![Dependency Status](https://david-dm.org/wejs/we-plugin-google-analytics.png)](https://david-dm.org/wejs/we-plugin-google-analytics)

> This plugin add suport to google analytics in your we.js project


## Features

### Server side template helper

```
{{{google-analytics}}}
```

## Configuration

```js
 GA: {
    id: [your google analytics ID],
    enableEmberjs: true, // add suport to track ember.js page changes
    env: {
      prod: true,
      dev: false,
      test: false
    }
  }
```

#### NPM Info:
[![NPM](https://nodei.co/npm/we-plugin-google-analytics.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/we-plugin-google-analytics/)

## Copyright and license

Copyright 2013-2014 Alberto Souza <alberto.souza.dev@gmail.com> and contributors , under [the MIT license](LICENSE).
