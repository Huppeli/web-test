var request = require('request');
var cheerio = require('cheerio');

request({url:'http://liiga.fi/tilastot/2017-2018/playoffs/pelaajat/',encoding:'utf8'}, function (error, response, html){
  if (!error && response.statusCode == 200) {
    // test out console.log(html);
    var $ = cheerio.load(html);

    var stuff = $('#stats').find("tbody>tr").each(function(){
      var stuff2 = $(this).find("a").text();
      console.log(stuff2);
    })
  }
})
