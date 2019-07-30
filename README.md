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
