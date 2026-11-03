const express = require('express');

const app = express();

app.use(express.json());

// Student records
let students = [];

// Task 2: Add a student
app.post('/api/students', (req, res) => {
const student = req.body;

```
students.push(student);

res.status(201).json({
    message: 'Student added successfully',
    student: student
});
```

});

// Task 3(a): Retrieve all student records
app.get('/api/students', (req, res) => {
res.status(200).json(students);
});

// Task 3(b): Retrieve a student using ID
app.get('/api/students/:id', (req, res) => {
const id = Number(req.params.id);

```
const student = students.find(s => s.id === id);

if (!student) {
    return res.status(404).json({
        message: 'Student not found'
    });
}

res.status(200).json(student);
```

});

// Task 4: Update student details
app.put('/api/students/:id', (req, res) => {
const id = Number(req.params.id);

```
const index = students.findIndex(s => s.id === id);

if (index === -1) {
    return res.status(404).json({
        message: 'Student not found'
    });
}

students[index] = {
    ...students[index],
    ...req.body,
    id: id
};

res.status(200).json({
    message: 'Student updated successfully',
    student: students[index]
});
```

});

// Task 5: Delete a student
app.delete('/api/students/:id', (req, res) => {
const id = Number(req.params.id);

```
const index = students.findIndex(s => s.id === id);

if (index === -1) {
    return res.status(404).json({
        message: 'Student not found'
    });
}

const deletedStudent = students.splice(index, 1);

res.status(200).json({
    message: 'Student deleted successfully',
    student: deletedStudent[0]
});
```

});

// Start server
const PORT = 3000;

app.listen(PORT, '127.0.0.1', () => {
console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
