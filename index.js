
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send({ hola: 'Hello World!' })
})

app.get('/ejemplo', (req, res) => {
    res.send({ example: 'Example' })
})

app.get('/ejemplo2', (req, res) => {
    res.send({ example: 'Example' })
})

app.get('/recetas', (req, res) => {
    res.send('Ejemplo')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})