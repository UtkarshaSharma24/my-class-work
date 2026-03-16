const http = require("http");
const fs = require("fs").promises;

const server = http.createServer(async (req, res) => {

    if (req.url === "/") {
        res.end("Welcome to Home Page");
    }

    else if (req.url === "/about") {
        res.end("This is About Page");
    }

    else if (req.url === "/contact") {
        res.end("Contact us at example@email.com");
    }

    else if (req.url === "/users") {
        try {
            const data = await fs.readFile("users.json", "utf-8");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        } catch (error) {
            res.writeHead(500);
            res.end("Error reading users file");
        }
    }

    else if (req.url === "/register" && req.method === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", async () => {

            const newUser = JSON.parse(body);

            const data = await fs.readFile("users.json", "utf-8");
            const users = JSON.parse(data);

            users.push(newUser);

            await fs.writeFile("users.json", JSON.stringify(users, null, 2));

            res.end("User Registered Successfully");
        });
    }

    else if (req.url === "/change-password" && req.method === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", async () => {

            const { email, newPassword } = JSON.parse(body);

            const data = await fs.readFile("users.json", "utf-8");
            const users = JSON.parse(data);

            const user = users.find(u => u.email === email);

            if (user) {
                user.password = newPassword;
                await fs.writeFile("users.json", JSON.stringify(users, null, 2));
                res.end("Password Updated");
            } else {
                res.end("User Not Found");
            }

        });
    }

    else if (req.url === "/delete-user" && req.method === "POST") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", async () => {

            const { email } = JSON.parse(body);

            const data = await fs.readFile("users.json", "utf-8");
            let users = JSON.parse(data);

            users = users.filter(u => u.email !== email);

            await fs.writeFile("users.json", JSON.stringify(users, null, 2));

            res.end("User Deleted");
        });
    }

    else {
        res.writeHead(404);
        res.end("404 Page Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});