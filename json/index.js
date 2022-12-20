const fs = require("fs");

const bioData = {
  name: "Amrit",
  age: 26,
  channel: "Hattechs",
};

// 1. Convert the JSON
// 2. Then add in File.
// 3. Read File
// 4. Again convert into json to Object
// 5. console.log

// const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("done");
// });

fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(data);
  console.log("Done read file");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(JSON.parse(data));
  console.log("Done json file");
});
