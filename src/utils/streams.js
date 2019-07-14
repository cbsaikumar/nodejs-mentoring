import program from 'commander';
import through2 from 'through2';
import fs from 'fs';
import path from 'path';
import { CsvToJson } from './csvtojson';
import https from 'https';

program
  .version('0.1.0')
  .option('-a, --action <action>', 'action name')
  .option('-f, --file [file]', 'local file path')
  .option('-p, --path [path]', 'css files folder path')

program.parse(process.argv);

if (!process.argv.splice(2).length || !program.action) {
    program.help();
}

if (program.action){
    switch(program.action){
        case 'reverse':
            console.log('reverse is called');
            reverse();
            break;
        case 'transform':
            console.log('transform is called');
            transform();
            break;
        case 'outputFile':
            console.log('outputFile is called');
            outputFile(program.file);
            break;
        case 'convertFromFile':
            console.log('convertFromFile is called');
            convertFromFile(program.file);
            break;
        case 'convertToFile':
            console.log('convertToFile is called');
            convertToFile(program.file);
            break;
        case 'cssBundler':
            console.log('cssBundler is called');
            cssBundler(program.path);
            break;
    }
}

//task1
function reverse(){
    process.stdin.setEncoding('utf8');

    process.stdin
    .on('data', (data) => {
        let input = data.toString().trim();
        let output = input.split('').reverse().join('');
        process.stdout.write(output + '\n');
    })
    .on('end', ()=>{
        console.log('reverse is done');
    });;
}

//task2
function transform(){
    let stream = through2({ objectMode: true }, function(chunk, enc, callback) {
        let string = chunk.toString().trim();
        let result = string.toUpperCase();
    
        this.push(result)
        callback()
    });

    stream.on('data', function(data) {
        process.stdout.write(data + '\n');
    })
    
    process.stdin
        .pipe(stream)
        .on('end', ()=>{
            console.log('transform is done');
    });
}

//task3
function outputFile(file){
   fs.createReadStream(path.join('src', 'data', file))
        .pipe(process.stdout)
        .on('end', ()=>{
            console.log('outputFile is done');
        })
        
}

//task4
function convertFromFile(file){
    let stream = through2.obj({objectMode: true}, function(chunk, enc, callback){
        this.push(JSON.stringify(CsvToJson(chunk.toString())));
        callback();
    });

    fs.createReadStream(path.join('src', 'data', file))
        .pipe(stream)
        .pipe(process.stdout)
        .on('done', ()=>{
            console.log('convertFromFile is done')
        });
}

//task5
function convertToFile(file){
    let readStream = fs.createReadStream(path.join('src', 'data', file));
    let writeStream = fs.createWriteStream(path.join('src', 'data', file.replace('.csv', '.json')));

    readStream.on('data', (data)=>{
        writeStream.write(JSON.stringify(CsvToJson(data.toString())));
    })
    .on('end', ()=>{
        console.log('convertToFile is done');
    });
}

//task6
function cssBundler(filePath){
    const fileNames = fs.readdirSync(filePath);
    const cssFileNames = fileNames.filter((file)=>{
        const regEx = /\.css/; 
        return regEx.test(file);
    });
    let writeStream = fs.createWriteStream(path.join(filePath, 'bundle.css'));
    cssFileNames.forEach((file)=>{
        fs.createReadStream(path.join(filePath, file)).pipe(writeStream);
    });

    let httpsStream = fs.createWriteStream(path.join(filePath, 'bundle.css'), {flags: 'a'});
    https.get('https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.css', data=> {
        data.pipe(httpsStream);
        console.log('css bundler has been generated');
    });
}