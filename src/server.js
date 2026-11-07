const http = require('http');

const server = http.createServer((req, res) => {
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    
    
    const responseData = {
        projectName: "OS Assignment 2 - Task API",
        status: "Running in Docker",
        tasks: [
            { id: 1, title: "Setup Docker Environment", completed: true },
            { id: 2, title: "Push to GitHub", completed: true },
            { id: 3, title: "Submit PDF Report", completed: false }
        ]
    };

    
    res.end(JSON.stringify(responseData, null, 2));
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});