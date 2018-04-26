var request = require('request');
var cheerio = require('cheerio');

request('http://liiga.fi/pelaajat/21819267/junttila-julius', function (error, response, html){
  if (!error && response.statusCode == 200) {
    // test out console.log(html);
    var $ = cheerio.load(html);
    var stuff = $('#page').children('h1').html();
    console.log(stuff);
  }
})
