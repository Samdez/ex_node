const objectImported = require('./information.js');
const cowsay = require('./node_modules/cowsay');

console.log(cowsay.say({
    text : `Hello I'm ${objectImported.name} from ${objectImported.campus}`
}));