const fetch = require('node-fetch');
const fs = require('fs');
const pathFlag = process.argv[2];

let deadLinks = [];
let aliveLinks = [];

module.exports = {
    validateFn: (linksArr) => {
        fs.readFile(pathFlag,'utf-8', (error, data)=> {
            if(!error){ //Aquí guardo el array de links
                const urls = /(https?:\/\/[^\s]+)/g; //cambiar expresión regular 
                const regEx = new RegExp(urls);
                let linksArray = data.match(regEx);
                linksArray.forEach(link => {
                    fetch(link)
                    .then (response => {
                        if (response.status >= 400){
                            deadLinks++;
                            console.warn(`ERROR. URL: ${link} STATUS CODE ${response.status}`);
                        }else{
                            aliveLinks++;
                            console.log(`OK. URL: ${link} STATUS CODE ${response.status}`)
                        }
                    });
                });
            } else {
                console.log('ERR: something went wrong')
            }
        });
    }
}