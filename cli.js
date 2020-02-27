#!/usr/bin/env node

// Modules
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const chalk = require('chalk');

const filePath = process.argv[2]; //what if it doesn't recieves a path?
let commandFlag = process.argv[3];
const log = console.log;

//
const mdLinks = () => {
    if(filePath.includes('.md')){
        log(chalk.bold.magenta('--------------------------------------------MARKDOWN LINKS--------------------------------------------'));
        log(chalk.greenBright.italic('-----------------------------------------coded by @dionisiaca-----------------------------------------'));
        switch (commandFlag) {
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
                log(linksArray);
        }
    }else{ //add functionality in case the program recieves a directory
        console.error('ERR: Invalid path or file extension. The program expects an .md file')
    };
    
};

function parseFile(filePath) {
    fs.readFile(pathFlag,'utf-8', (error, data)=> {
        if(!error){ //Save links array
            const urls = /(https?:\/\/[^\s]+)/g;
            const regEx = new RegExp(urls);
            let linksArray = data.match(regEx);
            return linksArray;
        } else {
            console.log('ERR: something went wrong')
        }
    });
}


mdLinks();
