#!/usr/bin/env node

// Modules
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const chalk = require('chalk');

const log = console.log;
const pathFlag = process.argv[2];

//Command Line Interface
const mdLinks = () => {
    if(pathFlag.includes('.md')){
        log('---------MARKDOWN LINKS---------');
        log('coded by @dionisiaca');
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
    }else{ //add functionality in case the program recieves a directory
        console.error('ERR: Invalid path or file extension. The program expects an .md file')
    };
    
}

parseFile(path) => {
    fs.readFile(pathFlag,'utf-8', (error, data)=> {
        if(!error){ //Save links array
            const urls = /(https?:\/\/[^\s]+)/g;
            const regEx = new RegExp(urls);
            let linksArray = data.match(regEx);
            //console.log(linksArray);
            return linksArray;
        } else {
            console.log('ERR: something went wrong')
        }
    });
}


