const express = require('express');

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Home route
app.get('/', (req, res) => {
res.send('Welcome to FSD-Mid-Term-1');
});

// Task 2: POST API to add a student
app.post('/api/students', (req, res) => {
const student = req.body;

```
res.status(201).json({
    message: 'Student added successfully',
    student: student
});
```

});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
