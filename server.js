import express from "express"
const app = express()
const port = 3000

app.get('/card', (req, res) => {
    res.send('Hello World!')
})

app.post('/card', (req, res) => {
    res.send('Hello World!')
})

app.put('/card:id', (req, res) => {
    res.send('Hello World!')
})

app.patch('/card:id', (req, res) => {
    res.send('Hello World!')
})

app.delete('/card:id', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})