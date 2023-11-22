Your Solution Documentation
===========================

### database
1. Mongo DB setup : 
    I used Atlas to created a hosted Mongo databse 'hipages' and then connected to my appliction use connection string, username and password. 
2. Development data prepare:
    based on the init data I have got, I wrote three json files for importing the documents. I run the importData (src/config/importDevData) function once when databse is connected 
### backend
1. nodejs + express + mongodb altas database (temporarily whitelist all ip so hipage can connect)
2. test: jest + supertest
### frontend
1. react + typescript + react_bootstrap

### how to run the project
1. in 'server' directory, run `npm install`, then `npm start` (as I'm using online mongodb and whitelist all ip, database used be connected. I kept .env file just for connection)
    http://localhost:8080
    ***please let me know once you have checked my project. I will disable the connection and change pw.***
2. in 'ui'ridrectory, run `npm install` then `npm start`. UI running at http://localhost:3000 
###

###  TODO:
As I only had 3 days to complete the project, time is very limited. not to mention I ran into some issues through the project. so I have used most of my time on this project, created as much more as I can. 
However there is a lot more I can do if more time given:
1. api request validation
2. remove uneccesary field returned from database call, like the '_id','_v'
2. use swagger tool to generate API document
4. add more unit tests and e2e test, set up test coverage threshold. I only add a few test case because of limited time box
5. add unit tests for frontend.
5. code refactor: move type definition to seperate files.
6. code refactor: create class for each service ( jobService, categoryService, suburbService )