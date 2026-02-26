const express = require('express');
const app = express();
const port = 8000;

const student = [
    { id: 1, name: 'Alice', age: 20 },
    { id: 2, name: 'Bob', age: 22 },
    { id: 3, name: 'Charlie', age: 21 }
]

app.get('/', (req, res) => {
    res.send('Hello Server!');
});

app.get('/about', (req, res) => {
    res.send('This is about page');
});

app.get('/img', (req, res) => {
    res.send(`
        <html>
            <body>
                <h1>Nature Image</h1>
                <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470" 
                     alt="nature image" 
                     width="500"/>
            </body>
        </html>
    `);
});

app.get('/read', (req, res) => {
    res.json(student);
});

app.listen(port, () => {
    console.log(`server is running at :http://localhost:${port}`);
});



