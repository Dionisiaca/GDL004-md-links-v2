const fs = require('fs');

const parseFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (error, data) => {
            if(!error){
                resolve(data)
            }else{
                reject('ERR: something went wrong while parsing the file')
            }
        })
    })
}