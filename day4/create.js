const fs = require("fs").promises;

async function writeData() {
  const data = await fs.readFile("students.json", "utf-8");
  const students = JSON.parse(data);

  const newStudent = {
    id: students.length + 1,
    name: "New Student",
    age: 21
  };

  students.push(newStudent);

  await fs.writeFile(
    "students.json",
    JSON.stringify(students, null, 2)
  );

  console.log("Updated successfully");
}

writeData().catch(err => console.error(err.message));
