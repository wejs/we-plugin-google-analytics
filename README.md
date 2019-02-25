# We.js google analytics plugin

This plugin add suport to google analytics in your we.js project wwith view plugin

## Features

> This plugin will add google analytcs tag in `we-html-body-end` template event

## Installation

```sh
ẁe i we-plugin-google-analytics
```

## Configuration

### With static config:

```js
 GA: {
    id: [your google analytics ID],
    env: {
      prod: true,
      dev: false,
      test: false
    }
  }
```

### With database system settings:

Set googleAnalyticsID system settings

## License

Under [the MIT license](https://github.com/wejs/we/blob/master/LICENSE.md).
