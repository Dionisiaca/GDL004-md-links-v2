const fs = require('fs');
const pathFlag = process.argv[2];

module.exports = {
    statsFn: () => {
        fs.readFile(pathFlag,'utf-8', (error, data)=> {
            if(!error){ //Aquí guardo el array de links
                const urls = /(https?:\/\/[^\s]+)/g; //cambiar expresión regular 
                const regEx = new RegExp(urls);
                let linksArray = data.match(regEx);
                let totalLinks = linksArray.length;
                console.log(totalLinks);
            } else {
                console.log('ERR: something went wrong')
            }
        });
    }
}