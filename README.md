# Hugo Project

## Current Situation of Hugo Zesty

- Zesty Burger Site Implemented, BUT
 - Single Pages Render without content due to [the site engine bug](https://github.com/zesty-io/issues/issues/763)
 - Complex Pages don't work due to to real proper way to get complex data from Zesty without custom endpoints
- JS Script gets all content / data specified + has support for custom endpoints, BUT
	- Unintuitive way to choose pages to migrate
		- every page and subpage must be manually specified by zuid
	- Must be using npm package - thus creating another dependency for the user to install
		- potentialy could be [rewritten in go](https://github.com/ronakdev/hugo-project/issues/11)
	- Cannot be bundled with hugo since hugo does not support run-hooks
	
  
## What is this? 

This is an example [Hugo](https://gohugo.io) project that demonstrates the capabilities of it working with [Zesty.io](https://

## `PullFromZesty.js`

This pulls either a `6-type` or a `7-type` zuid from your zesty instance. To configure which instance to use, edit the code. Currently, the instance is set to [http://burger.zesty.site](http://burger.zesty.site)
