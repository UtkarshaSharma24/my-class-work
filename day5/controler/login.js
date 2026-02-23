import { readFile } from "../utils/readAndwrite.js";

const FILE = "../users.json";
const userLogin = async (userDetails) => {
const { email, password } = userDetails;


const users = await readFile(FILE);
if(users.length == 0){
console.log("No user found, please register");
return;
}
const user = users.filter(user => user.email == email);
if(user.length == 0){
console.log("No user found with the provided email, please register");
return;
}

user[0].password == password && user[0].email == email ? console.log("Login successful") : console.log("Invalid email or password");
}

userLogin( {"email": "cwestwick2d@ibm.com", "password": "wV8\"lEK1=?"});