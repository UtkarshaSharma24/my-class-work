import fs from "fs/promises";

export const readAndWrite = async (Path) => {
  try {
    const data = await fs.readFile(Path, "utf-8");
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (error) {
    console.log("unable to read the file", error);
  }
}