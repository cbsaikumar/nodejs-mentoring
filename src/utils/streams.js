import program from 'commander';
import through2 from 'through2';
import fs from 'fs';
import path from 'path';
import { CsvToJson } from './csvtojson';
import https from 'https';
import { cssFileRemoteUrl } from '../constants/constants';
import chalk from 'chalk';

const log = console.log;

program
  .version('0.1.0')
  .option('-a, --action <action>', 'action name')
  .option('-f, --file [file]', 'local file path')
  .option('-P, --path [path]', 'css files folder path')

program.parse(process.argv);

if (!process.argv.splice(2).length || !program.action) {
    program.help();
}

if (program.action){
    switch(program.action){
        case 'reverse':
            log(chalk.blue.bgRed.bold('reverse is called'));
            reverse();
            break;
        case 'transform':
            log(chalk.blue.bgRed.bold('transform is called'));
            transform();
            break;
        case 'outputFile':
            log(chalk.blue.bgRed.bold('outputFile is called'));
            outputFile(program.file);
            break;
        case 'convertFromFile':
            log(chalk.blue.bgRed.bold('convertFromFile is called'));
            convertFromFile(program.file);
            break;
        case 'convertToFile':
            log(chalk.blue.bgRed.bold('convertToFile is called'));
            convertToFile(program.file);
            break;
        case 'cssBundler':
            log(chalk.blue.bgRed.bold('cssBundler is called'));
            cssBundler(program.path);
            break;
        default:
            log(chalk.blue.bgRed.bold('Pass an appropriate action name'));
            program.help();
    }
}

//task1
function reverse(){
    process.stdin
    .on('data', (data) => {
        let input = data.toString().trim();
        let output = input.split('').reverse().join('');
        process.stdout.write(output + '\n');
    })
    .on('end', ()=>{
        log('reverse is done');
    });
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
            log('transform is done');
    });
}

//task3
function outputFile(file){
   fs.createReadStream(path.join('src', 'data', file))
        .pipe(process.stdout)
        .on('end', ()=>{
            log('outputFile is done');
        })
        .on('error', (err)=> {
            log(err.message);
        })  
}

//task4
function convertFromFile(file){
    if(!isValidFileName(file, '.csv')) throw Error('Provide a valid csv file name');
    let stream = through2.obj({objectMode: true}, function(chunk, enc, callback){
        this.push(JSON.stringify(CsvToJson(chunk.toString())));
        callback();
    });

    fs.createReadStream(path.join('src', 'data', file))
        .pipe(stream)
        .pipe(process.stdout)
        .on('done', ()=>{
            log('convertFromFile is done')
        });
}

//task5
function convertToFile(file){
    if(!isValidFileName(file, '.csv')) throw Error('Provide a valid csv file name');
    let readStream = fs.createReadStream(path.join('src', 'data', file));
    let writeStream = fs.createWriteStream(path.join('src', 'data', file.replace('.csv', '.json')));

    readStream.on('data', (data)=>{
        writeStream.write(JSON.stringify(CsvToJson(data.toString())));
    })
    .on('end', ()=>{
        log('convertToFile is done');
    });
}

//task6
function cssBundler(filePath){
    if(!isDirectory(filePath)) throw Error('Given path is not a directory or not found, please provide a valid directory path');

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
    https.get(cssFileRemoteUrl, data=> {
        data.pipe(httpsStream);
        log('css bundler has been generated');
    });
}

//Check if path is a directory
function isDirectory(dirPath){
    return fs.existsSync(dirPath) && fs.lstatSync(dirPath).isDirectory();
}

//Check if given fine name is valid
function isValidFileName(filename, ext){
    const regEx = new RegExp(ext); 
    return regEx.test(filename);
}