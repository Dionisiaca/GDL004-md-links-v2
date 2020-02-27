const fs = require('fs');
const chalk = require('chalk');

const pathFlag = process.argv[2];

module.exports = {
    statsFn: () => {
        fs.readFile(pathFlag,'utf-8', (error, data)=> {
            if(!error){ //Aquí guardo el array de links
                const urls = /(https?:\/\/[^\s]+)/g; //cambiar expresión regular 
                const regEx = new RegExp(urls);
                let linksArray = data.match(regEx);
                let totalLinks = linksArray.length;
                console.log(chalk.blueBright(totalLinks));
            } else {
                console.log(chalk.blueBright('ERR: something went wrong while recieving the stats'))
            }
        });
    }
}