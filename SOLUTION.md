Your Solution Documentation
===========================

### database
1. Mongo DB setup : 
    I used Atlas to created a hosted Mongo databse 'hipages' and then connected to my appliction use connection string, username and password. 
2. Development data prepare:
    based on the init data I have got, I wrote three json files for importing the documents. I run the importData (src/config/importDevData) function once when databse is connected 
### backend
1. nodejs + express 
2. 
###  TODO:
if there is enough time, I will do:
1. api request validation
2. remove uneccesary field returned from database call, like the '_id','_v'
2. openApi doc 
4. more unit tests
5. move interface definition to seperate file
6. refactor and create class for each service ( jobService, categoryService, suburbService )