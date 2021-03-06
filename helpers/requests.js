const https = require('https');
const { WEB_STANDARDS_API } = require('./constants');

// TODO обработать reject
const request = () => new Promise((resolve, reject) => {
  https.get(WEB_STANDARDS_API, (res) => {
    const bodyChunks = [];
    res.on('data', (chunk) => {
      bodyChunks.push(chunk);
    });
    res.on('end', async () => resolve(JSON.parse(Buffer.concat(bodyChunks).toString())));
  });
});

module.exports = request;
