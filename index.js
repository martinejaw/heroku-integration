
const express = require('express')
var cors = require('cors');


const app = express()
app.use(express.json())
const port = 3000

app.use(cors());

app.get('/', (req, res) => {
    res.send({ hola: 'Hello World!' })
})


app.get('/recetas', (req, res) => {
    res.send('Ejemplo')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})