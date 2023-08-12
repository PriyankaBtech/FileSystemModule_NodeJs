/********************* Appending to a file *****************************/

const fs = require('fs')
// fs.appendFile()

// this method add data in your txt file, not replace but add with old data.

fs.appendFile('input.txt', ' NodeJs', 'utf8', function(err) {
    if(err) {
        console.log('Error In Appending File !')
    } else {
        console.log('Success in Appending file !')
    }    
} )