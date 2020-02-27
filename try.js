const fs = require('fs');
const chalk = require('chalk');

//Chalk formats
const err = chalk.red;
const ok = chalk.greenBright;

/* FUNCIÓN QUE VALIDA UN PATH*/


const mdLinks = () => {
    const filePath = process.argv[2]; //recibir un file
    const options = process.argv[3]
    let deadLinks = [];
    let aliveLinks = [];
    let linksCount = [];

    if(filePath.includes('.md')){ //Validar la extensión md
        switch (options) {
            case '--validate':
            case '--v':
                //Validate Fn
                log('validate');
                break;
            case '--stats':
            case '--s':
                //Stats Fn
                log('stats');
                break; 
            case '--stats--validate':
            case '--s--v':
                //Status/Validate Fn
                log('stats & validate')
                break;
            default:
                //Show links array fn
                parseFile(pathFlag);
                console.log(linksArray);
        }
    } else {
        console.error(err('ERR: Invalid path or file extension. The program expects an .md file to work with'))
    };
    
    /* FUNCIÓN QUE PARSEA EL ARCHIVO*/
    const parseFile = (filePath) => {
        fs.readFile(filePath,'utf-8', (error, data)=> {
            if(!error){
                const regEx = new RegExp(/\[(.*)\]\((https?:\/\/[^\s\){0}]+)\)/g);
                let linksArray = data.match(regEx);
                if(linksArray === null){
                    console.error(err('ERR: No links found to verify'))
                } else {
                    //console.log(linksArray);
                    return linksArray;
                }
            } else {
                console.error(err('ERR: Something went wrong while tryng to parse the file'))
            }
        });
    };
    
    /*FUNCIÓN QUE VALIDA LOS LINKS*/
    const validate = () => {
        linksArray.forEach(link => {
            fetch(link)
            .then (response => {
                if (response.status >= 400) {
                    deadLinks++;
                    console.log(err(`ERROR. URL: ${link} STATUS CODE ${response.status}`));
                } else {
                    aliveLinks++;
                    console.log(ok(`OK. URL: ${link} STATUS CODE ${response.status}`))
                }
            });
        })
    };
    
    /*FUNCIÓN QUE MUESTRA ESTADÍSTICAS*/
    const stats = () => {
        linksCount = linksArray.length;
    };
    
};

mdLinks();

