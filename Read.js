/********************* Different Methods of File System Module *************************/
// OPENING FILE

// Low level APIs
const fs = require('fs')

// Read > open + read
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        console.log("ERROR IN OPENING FILE :", err)
    }
    console.log("FILE OPEN SUCCESSFULLY !")
})
// output : FILE OPEN SUCCESSFULLY


let buf = new Buffer(1024)

fs.open('input.txt', 'r+', function(error, fd) {
    if (error) {
        console.log("ERROR IN OPENING FILE :", error)
    }
    console.log("FILE OPEN SUCCESSFULLY !")

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytesRead) {
        if (err) {
            console.log("ERROR IN READING FILE")
        }
        console.log("DATA :", bytesRead.toString())
    })
})

