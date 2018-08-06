const args = process.argv.slice(2) // get rid of the unneccesary arguments
const request = require('request') // to make the GET Request
const fs = require('fs') // to edit the file

function createMDForJSON(json, fileName) {
    let output = `---\n`

    for (let k in json) {
        let key = k
        if (key[0] === '`') {
            key = key.substr(1)
        }
        key = key.replace(/(?:\r\n|\r|\n)/g, '<br>');
        output += `${key}: ${json[key]}\n`
    }
    output += "---"

    fs.writeFile(fileName, output, (err) => {
        if (err) {
            return console.log(err)
        }
        console.log(`Markdown File Created at ${fileName}`)
    })
}

request(`http://burger.zesty.site/-/basic-content/${args[0]}.json`, (error, response, body) => {
    if (!error && response.statusCode == 200) {
        if (args[0][0] == `7`) {
            createMDForJSON(JSON.parse(body)['data'], args[1])
        }
        else if (args[0][0] == `6`) {
            let json = JSON.parse(body)
            let output = `---\n`
            let final = {}
            // first, we refine the array so we only have the latest version of each item
            for (var key in json['data']) {
                let dict = json['data'][key]
                let z = dict['_item_zuid']
                let version = dict['_version']
                if (z in final) {
                  if (final[z]['_version'] < version) {
                    final[z] = dict
                  }
                }
                else {
                  final[z] = dict
                }
            }
            // now, final is a dictionary that stores the zuid of each item. 
            for (let key in final) {
              // lets now take each item of json and create the markdown file
              createMDForJSON(final[key], `${args[1]}/${final[key]['_meta_title']}.md`)
            }
        }
    }
})