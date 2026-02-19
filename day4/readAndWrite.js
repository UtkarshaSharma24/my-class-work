const fs = require("fs").promises;

function readAndWrite() {
  fs.readFile("students.json", "utf-8")
    .then(data => {
      const students = JSON.parse(data);
      return fs.writeFile(
        "studentsCopy.json",
        JSON.stringify(students, null, 2)
      );
    })
    .then(() => {
      console.log("Done");
    })
    .catch(error => {
      console.error(error.message);
    });
}

readAndWrite();


