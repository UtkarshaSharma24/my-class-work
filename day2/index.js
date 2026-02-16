import fs from "fs";

const writeFile = (path, data) => {
  fs.writeFileSync(path, data);
  console.log("Data has been written to the file successfully.");
};

writeFile("./example.txt", "This data is written through sync function.");

const readFile = (path) => {
  const data = fs.readFileSync(path, "utf-8");
  console.log("Data read from the file:");
  console.log(data);
};

readFile("./example.txt");