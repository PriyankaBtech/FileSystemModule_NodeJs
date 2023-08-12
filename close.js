/********************* Closing to a file *****************************/

const fs = require('fs')
// fs.close()

// This method help to close your file.

let buf = new Buffer(1024)

fs.open('input.txt', 'r+', function(error, fd) {
    if (error) {
        console.log("ERROR IN OPENING FILE :", error)
    }
    console.log("FILE OPEN SUCCESSFULLY !")

    fs.read(fd, buf, 0, buf.length, 3, function(err, bytesRead) {
        if (err) {
            console.log("ERROR IN READING FILE")
        }
        console.log("Data :", bytesRead)
        console.log("DATA :", buf.slice(0, bytesRead).toString())

        // Close file
        fs.close(fd, function(err) {
            if(err) {
                console.log("Error in Closing file")
            } else {
                console.log("Success in Closing file")
            }

        })

    })
})

/*
output :

FILE OPEN SUCCESSFULLY !
Data : 24
DATA : py to LearnNodeJs NodeJs
Success in Closing file

*/
