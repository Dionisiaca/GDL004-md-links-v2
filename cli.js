#!/usr/bin/env node

const { mdLinks } = require('./index.js');

const path = process.argv[2];
const options = {
    validate: process.argv.includes('--validate') ||  process.argv.includes('--v'),
    stats: process.argv.includes('--stats') || process.argv.includes('--s'),
};

mdLinks(path, options).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.error(error);
})