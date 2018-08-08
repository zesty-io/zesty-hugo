# Hugo-Zesty

## Getting Started

1. [Installing Hugo](#Installing-Hugo)
2. [Creating your hugo project](#creating-your-hugo-project)
2. [Installing Hugo-Zesty](#Installing-Hugo-Zesty)
3. [usage](#usage)

### Installing Hugo

**macOS**

	brew install hugo
	
(If you aren't using brew, [get it here](https://brew.sh/))

**debian / ubuntu**	

	sudo apt-get install hugo

**other platforms**

[See the Hugo Website](https://gohugo.io/getting-started/installing)

### 

	hugo new site YourSite
	cd YourSite

### Installing Hugo-Zesty

#### Get Node.js with NPM First
**macOS**
	
	brew install node
	
**debian / ubuntu**

	curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
	sudo apt-get install -y nodejs
	
**other platforms**

[See the Node.js website](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

#### Clone the repository
	git clone https://github.com/ronakdev/hugo-project/
	cd hugo-project
	npm install

### Usage

#### Edit the `zesty.yaml` file in the hugo-zesty folder
	vim zesty.yaml # or nano / vi / emacs
	

#### Commands

- `npm start` # rebuilds data from zesty.io and runs a hugo server
- `npm run-script build-hugo` # rebuilds data from zesty.io and runs hugo to build a folder in `docs/`
- `npm run-script all` # rebuilds data from zesty.io, runs hugo to build a folder in `docs/`, and runs a hugo server

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
		- Currently bundled in a `NPM Package`
	
