var request = require('request');
request('http://burger.zesty.site/-/basic-content/7-4ad498-k2cldb.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
     var importedJSON = JSON.parse(body);
     console.log(importedJSON);
  }
})