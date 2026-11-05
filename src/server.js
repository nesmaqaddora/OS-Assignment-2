

const express = require('express');
const app = express();
const port = 3000;

// My project data
let myTasks = [
    { id: 1, title: "Install Docker", done: true },
    { id: 2, title: "Finish OS Assignment", done: false }
];

// Default route
app.get('/', (req, res) => {
    res.send("Welcome to my OS assignment project!");
});

// Get tasks route
app.get('/tasks', (req, res) => {
    res.json(myTasks);
});

// Start the server
app.listen(port, () => {
    console.log("Server is running on port 3000...");
});