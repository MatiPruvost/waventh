# waventh
Waventh is a [twitterbot](http://en.wikipedia.org/wiki/Twitterbot) developed using [Node.js](https://nodejs.org/).
Waventh lets upload a tweet with a random color image.

##Pre-requisites  
Software:  
git  
node  
npm  
grunt  

Twitter:  
Twitter account. [Creating an account](https://support.twitter.com/articles/100990-signing-up-with-twitter)  
Twitter application. [Creating an application](https://apps.twitter.com/app/new)  

## Getting started  
Clone repository:  
`$git clone https://github.com/MatiPruvost/waventh.git  `

Install dependencies:  
`$npm install  `

Create config fle:  
`$grunt file-creator  `

Update config file:  
Add consummer keys and tokens.  
Config image size (Default 200x200 px).  
Config cron job (Default each a hour).  

## Run waventh:  
Upload one tweet:  
`$node tweet.js  `

Upload tweet using cron job:  
`$node app.js  `

## Using waventh  
[@waventh](https://twitter.com/waventh)
