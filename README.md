# nodejs-mentoring
npm run start ==> To run the app.js, which is entry file of the project.

## === streams.js ===
```bash
Main actions to be called 
function ​​reverse​​(str) { ​/* ... */​ }
function​​​ transform​​(str) { ​/* ... */​ }
function​​​ outputFile​​(filePath) { ​/* ... */​ }
function ​​​convertFromFile​​(filePath) { ​/* ... */​ }
function ​​​convertToFile​​(filePath) { ​/* ... */​ }
```

## CODE WHICH IMPLEMENTS COMMAND LINE INTERACTION
```bash
=== Terminal ===
./streams.js --action=outputFile --file=users.csv
./streams.js --action=transformToFile --file=users.csv
./streams.js --action=transform textToTransform
./streams.js -a outputFile -f users.csv
./streams.js --help
./streams.js -h
```

## TO RUN STREAMS.JS RUN AS IN BELOW LINE 
```bash
nodemon -r esm src/utils/streams.js --help(or -h) for more details.
```

## TO RUN EXPRESS PROJECT RUN AS IN BELOW LINE 
```bash
nodemon -r esm src/expressjs/index.js

URL                             Method              Action
/api/products                    GET        Return ​ALL​ products
/api/products/:id                GET        Return ​SINGLE​ product
/api/products/:id/reviews        GET        Return ​ALL​ reviews for a single product
/api/products                    POST       Add ​NEW​ product and return it
/api/users                       GET        Return ​ALL​ users
```

## Social Media authentications (google, facebook, twitter authentication mechanisms have been incorporated) 
```bash
nodemon -r esm src/expressjs/index.js

URL                             Method              Action
/api/auth                        POST        jwt authentication, it returns token after successful login
/api/products                    GET         returns all products only when u attach a token from above api response(protected route)
/api/products/:id/reviews        GET         same as above(protected route)
/api/products                    POST        same as above(protected route)
/api/users                       GET         same as above(protected route)

/api/auth/facebook               GET         passport facebook strategy authentication, it redirects to facebook login screen for login
/api/auth/google                 GET         passport google strategy authentication, it redirects to google login screen for login
/api/auth/twitter                GET         passport twitter strategy authentication, it redirects to twitter login screen for login
```

## Postgresql database has been setup to replace usage of hardcoded data. All the below specified routes serves the purpose of getting data from the Postgresql by using Sequelize orm.  
```bash
npm run express

URL                             Method              Action
/api/products                    GET         returns all products from the postgresql hosted in localhost
/api/products/:id                GET         returns a single product matching the id specified
/api/products/:id/reviews        GET         returns reviews of a product with id
/api/products                    POST        adding a product to the database and returns the same upon                                                 successful post
/api/users                       GET         returns all users same as above.
```


## Mongodb database has been setup. All the below specified routes serves the purpose of getting data from the mongodb atlas by using mongoose.  
```bash
npm run express

URL                             Method              Action
/api/mongo/products              GET         returns all products from mongodb atlas
/api/mongo/cities                GET         returns all cities from mongodb atlas
/api/mongo/cities/:id            DELETE      returns all cities from mongodb atlas
/api/mongo/cities/random         GET         returns a random city from mongodb atlas
/api/mongo/products              POST        add a product to the mongodb atlas and returns the same upon successful post
/api/mongo/users/:id             DELETE      Deletes ​SINGLE​ user
/api/mongo/products/:id          DELETE      Deletes ​SINGLE​ product
```

## Swagger Documentation has been created for all the routes from homework 7.  So keep express server open and open /api-docs to view swagger documentation.
```bash
npm run express
http://localhost:8081/api-docs
```

