import fs from 'fs';
import csvtojson from 'csvtojson';

export class Importer{
    constructor(dirwatcher){
        this.dirwatcher = dirwatcher;
        this.path = 'src/data';

        this.dirwatcher.watch(this.path, 1000);
        this.dirwatcher.myEmitter.on('changed', (filename) => {
            this.import(this.path+'/'+filename).then(jsonObj => console.log(jsonObj));

            this.importSync(this.path+'/'+filename).then(jsonObj => console.log(jsonObj));
        });
    }

    //Asynchronous
    import(path){
        return csvtojson().fromFile(path);
    }

    //Synchronous
    importSync(path){
        let data = fs.readFileSync(path, {encoding:'utf-8'});

        return csvtojson().fromString(data);
    }
}