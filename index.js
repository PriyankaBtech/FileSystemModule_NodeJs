/***************************** File System Module ************************/

const fs = require('fs')

console.log("READ START")
// #Asynchronous way to Read File
fs.readFile('input.txt', function(err, data) {
    if (err) {
        console.log("ERROR :", err)
        return err
    }
    else {
        console.log("DATA :", data.toString())
        console.log("READ END")
        return data
    }
})
console.log("OTHER STUFF")

/* Output :

READ START
OTHER STUFF
DATA : Hello
READ END
*/


// #Synchronous way to Read File

let data = fs.readFileSync('input.txt')
console.log("Data :", data.toString())
console.log("Read End")
console.log("OTHER STUFF")

/*
Ouput :

Data : Hello, I am Priyanka
I am learning Node.Js
Read End
OTHER STUFF
*/



