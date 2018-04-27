var request = require('request');
var cheerio = require('cheerio');

request('http://liiga.fi/tilastot/2017-2018/playoffs/pelaajat/', function (error, response, html){
  if (!error && response.statusCode == 200) {
    // test out console.log(html);
    var $ = cheerio.load(html);

    var stuff = $('#stats').children('tbody').children('tr').each(function(i, element){

    }).html();

    // var stuff = $('#page').children('h1').html();
    console.log(stuff);
  }
})
