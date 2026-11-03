const express = require('express');

const app = express();

const PORT = 3000;

// Middleware to accept JSON data
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to FSD Mid-Term-1');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});