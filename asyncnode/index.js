const fs = require("fs");

// fs.writeFile("read.txt", "Today is awesome day", (error) => {
//   console.log("File is created");
//   console.log(error);
// });

// fs.appendFile("read.txt", "HY HELLO HOW ARE YOU?", (error) => {
//   console.log("Task is completed");
//   console.log(error);
// });

fs.readFile("read.txt", "UTF-8", (error, data) => {
  console.log(data);
});
