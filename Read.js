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

    fs.read(fd, buf, 0, buf.length, 3, function(err, bytesRead) {
        if (err) {
            console.log("ERROR IN READING FILE")
        }
        console.log("Data :", bytesRead)
        console.log("DATA :", buf.slice(0, bytesRead).toString())

    })
})

/* output :

FILE OPEN SUCCESSFULLY !
Data : 43
DATA : lo, I am Priyanka
I am learning Node.Js

 */

// Note : generally we are not reading file this way, we are using async method to read files (fileRead()).

