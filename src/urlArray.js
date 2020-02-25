const fs = require('fs');
let pathFlag = process.argv[2];

module.exports = {
    //Parsing the file
    parseFile: (path) => {
        fs.readFile(pathFlag,'utf-8', (error, data)=> {
            if(!error){ //Aquí guardo el array de links
                const urls = /(https?:\/\/[^\s]+)/g; //cambiar expresión regular 
                const regEx = new RegExp(urls);
                let linksArray = data.match(regEx);
                console.log(linksArray);
                //return linksArray;
            } else {
                console.log('ERR: something went wrong')
            }
        });
    }
}
