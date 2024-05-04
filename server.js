import {DatabaseMemory} from "./database-memory.js";
import express from "express"; // Import express as the default export

const app = express(); // Create an Express app instance

// Use middlewares with correct syntax
app.use(express.json()); // Parse application/json requests
app.use(express.urlencoded({extended: true})); // Parse application/x-www-form-urlencoded requests with extended options

const database = new DatabaseMemory()

app.get('/cards', (req, res) => {
    const search = req.query
    const cards = database.list(search);

    return res.json(cards)
})

app.post('/cards', (req, res) => {
    const {
        title,
        attribute,
        types,
        level,
        atk,
        def,
        passcode,
        statuses,
        description
    } = req.body;


    database.create({
        title,
        attribute,
        types,
        level,
        atk,
        def,
        passcode,
        statuses,
        description
    })
    return res.status(200).send();
})

app.put('/cards/:id', (req, res) => {
    const id = req.params.id;
    const {
        title,
        attribute,
        types,
        level,
        atk,
        def,
        passcode,
        statuses,
        description
    } = req.body;

    database.update(id, {
        id,
        title,
        attribute,
        types,
        level,
        atk,
        def,
        passcode,
        statuses,
        description
    });

    return res.status(204).send();
})

// app.patch('/cards/:id', (req, res) => {
//     res.send('Hello World!')
// })

app.delete('/cards/:id', (req, res) => {
    const id = req.params.id
    database.delete(id)

    return res.status(204).send();
})

// Start the server and listen on a port
const port = 3000; // Set the port number
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});