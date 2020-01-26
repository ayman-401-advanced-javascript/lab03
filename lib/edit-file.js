'use strict';

const fs = require('fs');
const util = require('util');

const readerFile = (file, cb)=>{
    fs.readFile(file, (err,data)=>{
        console.log(data.toString())
        if(err)cb(err);
        else cb(undefined, data.toString())
    });
}



module.exports = {readerFile}