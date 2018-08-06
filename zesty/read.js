const matter = require('gray-matter')
const fs = require('fs')
const args = process.argv.slice(2)

let extension = args[0].substr(args[0].lastIndexOf('.')+1, args[0].length)

if (extension === "toml") {
	const toml = require('toml')

	fs.readFile(args[0], 'utf8', (err, contents) => {
		
		let data = contents
		data = `---${extension}\n${contents}`
		console.log(matter(data, {
			engines: {
				toml: toml.parse.bind(toml)
			}
		}).data.contentZuids)
	})
}
else {
	if (extension === "json" || extension === "yaml") {}
	else {console.log(`Your File Extension ${extension} has not been tested, trying to read anyways`)}
	
	fs.readFile(args[0], 'utf8', (err, contents) => {
		let data = contents
		data = `---${extension}\n${contents}`
		console.log(matter(data).data.contentZuids)
	})

}
