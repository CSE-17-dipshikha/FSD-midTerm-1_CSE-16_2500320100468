
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
res.send('Welcome to FSD-Mid-Term-1');
});

app.post('/api/students', (req, res) => {
const student = req.body;

```
res.status(201).json({
    message: 'Student added successfully',
    student: student
});
```

});

const PORT = 3000;

app.listen(PORT, '127.0.0.1', () => {
console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
