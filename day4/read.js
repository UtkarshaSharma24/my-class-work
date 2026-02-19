const fs = require("fs").promises;

async function readStudents() {
  const data = await fs.readFile("students.json", "utf-8");
  const students = JSON.parse(data);
  console.log(students);
}

readStudents().catch(error => {
  console.error("Error:", error.message);
});
