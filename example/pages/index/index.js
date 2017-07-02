//index.js

const wxFetch = require('../../wxapp-fetch').default;

var app = getApp();
Page({
  data: {
    success: 0,
    fail: 0
  },
  onLoad: function() {
    console.log('onload index');
    wxFetch('https://www.baidu.com')
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
  }
});
