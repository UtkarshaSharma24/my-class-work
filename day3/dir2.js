const fs = require("fs").promises;

async function createDirectory(name) {
    await fs.mkdir(name);
}

async function readDirectory(name) {
    const files = await fs.readdir(name);
    console.log(files);
}

createDirectory("demo");
readDirectory("demo");




const fs = require("fs");

function createDirectorySync(name) {
    fs.mkdirSync(name);
}

function readDirectorySync(name) {
    const files = fs.readdirSync(name);
    console.log(files);
}

createDirectorySync("demo");
readDirectorySync("demo");
