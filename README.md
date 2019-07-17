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
npx babel-node src/utils/streams.js --help(or -h) for more details.
```
