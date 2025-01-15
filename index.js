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

app.get('/notes.id', (request, response) => {
    response.json(notes/notes.id);
});

app.post('/notes', (request, response) => {
    const Note = {
        //id: notes.length +1,
        //note: request.body.note,
        //autor: request.body.autor,
        //date: request.body.date
    };
    notes.push(Note);
    response.json(notes);
});

app.put('/notes/:id', (request, response) => {
    const newNote = {
        id: notes.length +1,
        note: request.body.note,
        autor: request.body.autor,
        date: request.body.date
    };
    notes.put(notes/id);
    response.json(notes);
});

app.delete('/notes/:id', (request, response) => {
    notes = notes.filter(note => note.id !== parseInt(request.params.id));
    response.json(notes);
});