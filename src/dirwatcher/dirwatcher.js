import fs from 'fs';
import EventEmitter from 'events';
class MyEmitter extends EventEmitter{};

export class DirWatcher{
    watch(path, delay){
        this.myEmitter = new MyEmitter();
        let files, files2;
        setInterval(()=>{
            files2 = fs.readdirSync(path);
            if(files){
                // For addition of files
                let change = this.compare(files, files2);
                if(change) {
                    this.myEmitter.emit('changed', change);
                }
                else{
                    //For changes in any files.
                    files.forEach((file, index) => {
                        if((Date.now() - fs.statSync(path+'/'+file).mtimeMs) < 1000){
                            this.myEmitter.emit('changed',files2[index]);
                        }
                    });
                }
            }
            files = fs.readdirSync(path);
        }, delay);
    }

    compare(arr1, arr2){
        let el;
        if(arr1.length === arr2.length){
            for(let i=0; i<arr1.length; i++) {
                if(arr2[i] != arr1[i]){
                    el = arr2[i];
                    console.log(el);
                }
            };
            return el;
        }
        else{
            let el;
            for(let i=0; i<Math.max(arr1.length, arr2.length); i++) {
                if(arr2[i] != arr1[i]){
                    el = arr1[i]?arr1[i]:arr2[i];
                    console.log(el);
                }
            };
            return el;
        }
    }
}