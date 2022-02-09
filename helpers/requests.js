const https = require('https');
const { WEB_STANDARDS_API } = require('./constants');

const request = () => new Promise((resolve, reject) => {
  https.get(WEB_STANDARDS_API, (res) => {
    const bodyChunks = [];
    res.on('data', (chunk) => {
      bodyChunks.push(chunk);
    });
    res.on('end', async () => resolve(Buffer.concat(bodyChunks)));
  });
});

module.exports = request;
