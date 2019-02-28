'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const cors = require('cors');
app.use(cors());

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
router.get('/another', (req, res) => res.json({ route: req.originalUrl }));
router.post('/', (req, res) => res.json({ postBody: req.body }));

router.get('/instagram', (req, res) => {
  var options = {
    method: 'GET',
    url: 'https://www.instagram.com/cuancuan.id/',
    qs: { __a: '1' },
    headers: {
      'postman-token': '4642ed19-e396-4d12-00f7-2ca1009b2514',
      'cache-control': 'no-cache',
      'x-instagram-gis': '82dfe56cc5dc83b65777ebd3465b7a85',
      'x-requested-with': 'XMLHttpRequest',
      authority: 'www.instagram.com',
      referer: 'https://www.instagram.com/cuancuan.id/',
      accept: '*/*',
      'user-agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36',
      'accept-language': 'en-US,en;q=0.9',
      'accept-encoding': 'deflate, br',
      'x-ig-app-id': '936619743392459',
      cookie:
        'mid=W1hA3wAEAAFixOzSacimhu_xjdw6; mcd=3; fbm_124024574287414=base_domain=.instagram.com; csrftoken=o3P5v6aSGdnuUp6H5BwgmkGbpqFtkG1D; csrftoken=Uk2Nz2jZim0IxxYHHp3QHVcNW92M6CGD; ds_user_id=272273718; sessionid=272273718%3APPt8XfwMLC4wiK%3A24; shbid=660; rur=FRC; shbts=1550541417.259021; urlgen=\\"{\\\\"114.124.171.156\\\\": 23693\\054 \\\\"103.43.128.51\\\\": 133797}:1gvyzu:COegvBsIBgZoSVSE0PncfBd3ujU\\"'
    }
  };

  request(options, function(error, response, body) {
    if (error) {
      res.send('error');
    } else {
      console.log('success');

      res.send(JSON.parse(body));
    }
  });
});

router.get('/tokopedia/:id', (req, res) => {
  var idEtalase = '12868316';
  if (req.params.id == 'second') {
    idEtalase = '12870086';
  }
  var url = `https://ace.tokopedia.com/search/product/v3?shop_id=3503006&ob=9&rows=80&start=0&full_domain=www.tokopedia.com&scheme=https&device=desktop&source=shop_product&etalase=${idEtalase}`;

  if (req.params.id == 'sold') {
    url = `https://ace.tokopedia.com/search/product/v3?shop_id=3503006&ob=14&rows=80&start=0&full_domain=www.tokopedia.com&scheme=https&device=desktop&source=shop_product&etalase=sold`;
  }
  var options = { method: 'GET', url: url };

  request(options, function(error, response, body) {
    if (error) {
      res.send('error');
    } else {
      console.log('success');

      res.send(JSON.parse(body));
    }
  });
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router); // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
