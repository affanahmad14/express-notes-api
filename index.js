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

//Alle Notizen abrufen
app.get('/notes', (request, response) => {
    response.json(notes);
});

//Notiz nach ID abrufen
app.get('/notes/:id', (request, response) => {

    const id = parseInt(request.params.id);
    let findNote = null;
    notes.forEach(note => {
        if (note.id === id) {
            findNote = note;
        }
    });

    response.json(findNote);
});

//Notiz erstellen
app.post('/notes', (request, response) => {

    const lastId = notes[notes.length - 1].id;
    console.log(lastId);
    const newNote = {
        id: lastId + 1,
        note: request.body.note,
        autor: request.body.autor,
        date: new Date(),
    };
    notes.push(newNote);
    response.send("Note has been stored");

});

//Notiz updaten
app.put('/notes/:id', (request, response) => {
    letid = parseInt(request.params.id);
    let updateNote = null;
    notes.forEach(note => {
        if (note.id === id) {
            updateNote = note;
        }
    });

    if (updateNote !== null) {
        updateNote.note = request.body.note;
        updateNote.autor = request.body.autor;
        updateNote.date = new Date();
    }
    response.send("Note has been updated");

});

//Notiz löschen
app.delete('/notes/:id', (request, response) => {
    let id = parseInt(request.params.id);
    notes = notes.filter(note => note.id !== id);
    console.log(notes);
    response.send("Note has been deleted");
});

// Server starten
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
  });

