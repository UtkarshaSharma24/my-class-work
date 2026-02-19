const fs = require("fs").promises;

async function updateStudent() {
  const data = await fs.readFile("students.json", "utf-8");
  const students = JSON.parse(data);

  const updated = students.map(student => {
    if (student.id === 1) {
      return { ...student, age: 25 };
    }
    return student;
  });

  await fs.writeFile(
    "students.json",
    JSON.stringify(updated, null, 2)
  );

  console.log("Updated");
}

updateStudent().catch(err => console.error(err.message));
