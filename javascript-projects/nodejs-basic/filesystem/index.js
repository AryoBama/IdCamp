const fs = require("fs");

fs.readFile("notes.txt", "UTF-8", (err,data)=>{
    console.log(data);
});