const express = require('express');
const cors = require('cors');  // Import cors
const app = express();
const port = 3000;

// Enable CORS for all origins
app.use(cors());

// Array of random messages
const messages = [
    "Hello, World!",
    "Welcome to the backend!",
    "Hey there!",
    "Greetings from the server!",
    "Random message incoming!",
];

// Root endpoint
app.get('/', (req, res) => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    res.send(randomMessage);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
