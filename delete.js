/********************* Deleting to a file *****************************/

const fs = require('fs')
// fs.unlink()

// This method used to delete the txt file data

fs.unlink('input.txt', function(err) {
    if(err) {
        console.log('Error in Deleting file')
    } else {
        console.log('Success in Deleting file')
    }
})

// OUTPUT : Success in Deleting file

// Note : Your input.txt file will remove after run the code