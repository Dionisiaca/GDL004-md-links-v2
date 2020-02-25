//Modules
const urlArr = require('./src/urlArray');
const stats = require('./src/stats.js');
const validate = require('./src/validate.js');

//Input variables
let pathFlag = process.argv[2];
let commandFlag = process.argv[3];
const log = console.log;

//Validate the .md file
 const mdLinks = () => {
     if(pathFlag.includes('.md')){
        log('MD LINKS');
        switch (commandFlag) {
            case '--validate':
            case '--v':
                log(validate.validateFn());
                break;
            case '--stats':
            case '--s':
                log('Total links: ' + stats.statsFn());
                break; 
            case '--stats--validate':
            case '--s--v':
                log('stats & validate')
                break;
            default:
                log(urlArr.parseFile(pathFlag));
                setTimeout(() => { 
                log('ERR: Please write a valid command');
                }, 3000);
        }
     } else {
        console.error('ERR: Invalid path or file extension')
     }
};


//Calling the function
mdLinks();