
const express = require('express')


const app = express()
app.use(express.json())

const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send({ hola: 'Hello World!' })
})


app.get('/recetas', (req, res) => {
    res.send('Ejemplo')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})