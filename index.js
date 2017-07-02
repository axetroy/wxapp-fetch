// @flow

import http from 'wxapp-http';

function generateResponse(res) {
  let header = res.header || {};
  let config = res.config || {};
  return {
    ok: ((res.statusCode / 200) | 0) == 1, // 200-299
    status: res.statusCode,
    statusText: res.errMsg,
    url: config.url,
    clone: () => generateResponse(res),
    text: () =>
      Promise.resolve(
        typeof res.data === 'string' ? res.data : JSON.stringify(res.data)
      ),
    json: () => {
      if (typeof res.data === 'object') return Promise.resolve(res.data);
      let json = {};
      try {
        json = JSON.parse(res.data);
      } catch (err) {
        console.error(err);
      }
      return json;
    },
    blob: () => Promise.resolve(new Blob([res.data])),
    headers: {
      keys: () => Object.keys(header),
      entries: () => {
        let all = [];
        for (let key in header) {
          all.push([key, header[key]]);
        }
        return all;
      },
      get: n => header[n.toLowerCase()],
      has: n => n.toLowerCase() in header
    }
  };
}

export default (typeof fetch == 'function'
  ? fetch.bind()
  : function(url, options) {
      options = options || {};
      return http
        .request(options.method || 'get', url, options.body, options.headers)
        .then(res => Promise.resolve(generateResponse(res)))
        .catch(res => Promise.reject(generateResponse(res)));
    });
