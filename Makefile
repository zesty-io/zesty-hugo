.DEFAULT_GOAL := all

pullzesty:
	node zesty/pullzesty.js zesty.yaml --verbose
hugo:
	hugo
hugo-server: 
	hugo server
all: pullzesty hugo hugo-server
