//Modules
const urlArr = require('./src/urlArray');
const stats = require('./src/stats.js');
const validate = require('./src/validate.js');
const chalk = require('chalk');

//Input variables
let pathFlag = process.argv[2];
let commandFlag = process.argv[3];

//Validate the .md file
 const mdLinks = () => {
     if(pathFlag.includes('.md')){
        switch (commandFlag) {
            case '--validate':
            case '--v':
                console.log(validate.validateFn());
                break;
            case '--stats':
            case '--s':
                console.log('Total links: ' + stats.statsFn());
                break; 
            case '--stats--validate':
            case '--s--v':
                console.log('stats & validate')
                break;
            default:
                console.log(urlArr.parseFile(pathFlag));
                setTimeout(() => { 
                console.log(chalk.blue('To get more info, use the --validate or --stats command'));
                }, 3000);
        }
     } else {
        console.error(chalk.redBright('ERR: Invalid path or file extension. The program expects an .md file to work with'))
     }
};


//Calling the function
mdLinks();