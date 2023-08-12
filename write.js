/********************* Writing to a file *****************************/

const fs = require('fs')
// fs.writeFile()

fs.writeFile('input.txt', 'Happy to Learn', function(err) {
    if(err) {
        console.log('Error In Writing File !')
    } else {
        console.log('Success in writing file !')
    }
})
// OUTPUT : Success in writing file !

// Note : In input.txt, the past data replace with 'Happy to Learn'(new data)







