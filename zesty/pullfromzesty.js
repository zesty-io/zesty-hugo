var args = process.argv.slice(2)
var request = require('request');
var fs = require('fs')

request('http://burger.zesty.site/-/basic-content/' + args[0]+'.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body)
    var json = JSON.parse(body)
    var output = "---\n"
    Object.keys(json['data']).forEach(function (key) {
      // do something with obj[key]
      output += key + ": " + json['data'][key] + "\n"
   });
   output += "---"

   fs.writeFile(args[1], output, (err) => {
    if (err) {
      return console.log(err)
    }  
    console.log("Success! View your output at " + args[1] + ".md")
   })
  }
})