const fs = require("fs").promises;

async function readUsers() {
  const data = await fs.readFile("users.json", "utf-8");
  return JSON.parse(data);
}

module.exports = { readUsers };