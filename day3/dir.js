//  git push --force origin main

const fs = require("fs").promises;

async function makeDirSyn(folderName) {
    try {
        await fs.mkdir(folderName, { recursive: true });
        console.log("Directory created successfully");
    } catch (error) {
        console.error("Error creating directory:", error.message);
    }
}

makeDirSyn("myFolder");


const fs = require("fs").promises;

async function makeDirectory(name) {
    await fs.mkdir(name);
}

async function removeDirectory(name) {
    await fs.rmdir(name);
}

makeDirectory("demo");
removeDirectory("demo");



const fs = require("fs").promises;

async function readDirectory(folderName) {
    const files = await fs.readdir(folderName);
    console.log(files);
}

readDirectory("demo");

















