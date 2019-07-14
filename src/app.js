import { Importer } from './importer';
import { DirWatcher } from './dirwatcher';
import { Product, User } from './models';

new Product();
new User();
let dirwatcher = new DirWatcher();
new Importer(dirwatcher);