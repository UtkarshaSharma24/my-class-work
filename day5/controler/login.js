const { readUsers } = require("../utils/readUsers");

async function login(email, password) {
  try {
    const users = await readUsers();

    const matchedUser = users.filter(user => 
      user.email === email && user.password === password
    );

    if (matchedUser.length > 0) {
      console.log("Login Successful");
      return matchedUser[0];
    } else {
      console.log("Invalid Email or Password");
      return null;
    }

  } catch (error) {
    console.log("Error:", error.message);
  }
}

module.exports = login;