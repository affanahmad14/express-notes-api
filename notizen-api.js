const express = require('express');
const app = express();
const port = 3000;

// Middleware json-Format
app.use(express.json());

let notes = [
    { id: 1, note: 'My new Note', autor: `Max Mustermann`, date: `2025-01-15` } 
];

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
} );

app.get('/', (request, response) => {
    response.send('Hello World');
});

app.get('/notes', (request, response) => {
    response.json(notes);
});

app.post('/note', (request, response) => {
    const newNote = {
        id: notes.length +1,
        note: request.body.note,
        autor: request.body.autor,
        date: request.body.date
    };
    notes.push(newNote);
    response.json(notes);
});