import {readFile} from "../utils/readFile.js";
import {writeFile} from "../utils/writerFile.js";

const userRegistration = async (userDetils) => {
    const {name, email, password} = userDetils;
    if(!name || !email || !password || !gender){
        console.log("Please provide all the details");
        return;
    }

}
import { readFile } from "../utils/readFile.js";
import { writeFile } from "../utils/writerFile.js";

const userRegistration = async (userDetails) => {
    try {
        const { name, email, password, gender } = userDetails;

        if (!name || !email || !password || !gender) {
            console.log("Please provide all the details");
            return;
        }

        const users = await readFile();

        const userExists = users.find(user => user.email === email);

        if (userExists) {
            console.log("User already exists");
            return;
        }

        const newUser = {
            id: users.length + 1,
            name,
            email,
            password,
            gender
        };

        users.push(newUser);

        await writeFile(users);

        console.log("User Registered Successfully");

    } catch (error) {
        console.log("Error:", error.message);
    }
};

export default userRegistration;