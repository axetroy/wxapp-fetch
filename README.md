# wxapp-fetch

[![Build Status](https://travis-ci.org/axetroy/wxapp-fetch.svg?branch=master)](https://travis-ci.org/axetroy/wxapp-fetch)
[![Dependency](https://david-dm.org/axetroy/wxapp-fetch.svg)](https://david-dm.org/axetroy/wxapp-fetch)
![License](https://img.shields.io/badge/license-MIT-green.svg)
[![Prettier](https://img.shields.io/badge/Code%20Style-Prettier-green.svg)](https://github.com/prettier/prettier)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
[![npm version](https://badge.fury.io/js/wxapp-fetch.svg)](https://badge.fury.io/js/wxapp-fetch)

微信小程序的 fetch 接口实现

## Features

- [x] 队列化请求，规避最高并发数量 5 个的限制

## Installation

```bash
npm install wxapp-fetch --save
```

[example](https://github.com/axetroy/wxapp-fetch/tree/master/example)

## Usage

```javascript
import wxFetch from "wxapp-http";

wxFetch("https://www.google.com")
  .then(function(res) {
    return res.json();
  })
  .then(data => {
    console.info(data);
  })
  .catch(err => {
    console.error(err);
    console.error(err.json());
  });
```

## Related

[wxapp-http](https://github.com/axetroy/wxapp-http) 微信小程序的 http 模块，Tiny but Powerful

[wxapp-XMLHttpRequest](https://github.com/axetroy/wxapp-XMLHttpRequest) Web XMLHttpRequest implement for WeChat APP

[wxapp-r2](https://github.com/axetroy/wxapp-r2) r2 implement in Wechat App client

## Contributing

```bash
git clone https://github.com/axetroy/wxapp-fetch.git
cd ./wxapp-fetch
yarn
yarn start
```

1. 打开微信 web 开发者工具， 加载 wxapp-http/example 目录
2. 修改 index.js

欢迎 PR.

You can flow [Contribute Guide](https://github.com/axetroy/wxapp-fetch/blob/master/contributing.md)

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/gpmer/gpm.js/commits?author=axetroy) 🔌 [⚠️](https://github.com/gpmer/gpm.js/commits?author=axetroy) [🐛](https://github.com/gpmer/gpm.js/issues?q=author%3Aaxetroy) 🎨 |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

The [MIT License](https://github.com/axetroy/wxapp-fetch/blob/master/LICENSE)
