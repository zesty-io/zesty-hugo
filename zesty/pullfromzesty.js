var args = process.argv.slice(2)
var request = require('request');
var fs = require('fs')

function createMDForJSON(json, fileName) {
    var output = "---\n"
    Object.keys(json).forEach(function(key) {
        // do something with obj[key]
        output += key + ": " + json[key] + "\n"
    });
    output += "---"

    fs.writeFile(fileName, output, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log("Markdown File Created at " + args[1] + ".md")
    })
}
request('http://burger.zesty.site/-/basic-content/' + args[0] + '.json', function(error, response, body) {
    if (!error && response.statusCode == 200) {
        if (args[0][0] == "7") {
            var json = JSON.parse(body)
            createMDForJSON(json['data'], args[1])
        }
        else if (args[0][0] == "6") {
            var json = JSON.parse(body)
            var output = "---\n"
            var final = {}
            // first, we refine all of our items and get only the latest versions
            Object.keys(json['data']).forEach(function(key) {
                var dict = json['data'][key]
                var z = dict['_item_zuid']
                var version = dict['_version']
                if (z in final) {
                  if (final[z]['_version'] < version) {
                    final[z] = dict
                  }
                }
                else {
                  final[z] = dict
                }
            });
            // now, final is a dictionary that stores the zuid of each item. 
            Object.keys(final).forEach(function(key) {
              // lets now take each item of json and create the markdown file
              console.log("@@@")
              console.log(final)
              console.log("@@@")
              createMDForJSON(final[key], (args[1] + "/" + key + ".md"))
            })
        }
    }
})