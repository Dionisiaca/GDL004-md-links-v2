// Modules
const {parseFile} = require('./src/parseFile.js');
const {obtainLinks} = require('./src/obtainLinks.js')

//MdLinks Fn

module.exports.mdLinks = (path, options) => {
    return new Promise((resolve, reject)=>{
        if (path.includes('.md')){
            .then((resolve) => {
                return parseFile(path)
            })
            .then((resolve)=> {
                return obtainLinks(resolve, path)
            })
            .then(data => {
                resolve(data)
            })
            .catch(reject)
        }else{
            console.error('ERR: Invalid path or file extension. The program expects an .md file to work with')
        }
    })   
}