const path = require("path");
console.log(
  path.dirname(
    "C:Users/saura/OneDrive/Desktop/Nodejs/secondtask/pathmodule/path.js"
  )
);

console.log(
  path.basename(
    "C:Users/saura/OneDrive/Desktop/Nodejs/secondtask/pathmodule/path.js"
  )
);

console.log(
  path.parse(
    "C:Users/saura/OneDrive/Desktop/Nodejs/secondtask/pathmodule/path.js"
  )
);

const mypath = path.parse(
  "C:Users/saura/OneDrive/Desktop/Nodejs/secondtask/pathmodule/path.js"
);

console.log(mypath.root);
