//? Filecopy
//  const fs=require('fs')
 
//  fs.copyFileSyncSync("Read.js" , "Readcopy.js ")



// <---------------revision----------->

const fs = require("fs");

// Fixed: Removed the trailing space inside the quotes
fs.copyFileSync("Revision.txt", "text.txt");

//callback
//aync and await (promise)