const fs = require("fs").promises;

async function deleteStudent() {
  const data = await fs.readFile("students.json", "utf-8");
  const students = JSON.parse(data);

  const updatedStudents = students.filter(student => student.id !== 2);

  await fs.writeFile(
    "students.json",
    JSON.stringify(updatedStudents, null, 2)
  );

  console.log("Student Deleted");
}

deleteStudent().catch(err => console.error(err.message));
