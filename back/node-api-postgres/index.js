const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries');
const cors = require('cors');
const port = 3000


// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// Process application/json
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', db.getUsers)

app.post('/login', db.loginUser)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.get('/projets', db.getProject)
app.get('/changements/:id', db.getChangements)
app.get('/taches/:id', db.getTaches)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})

app.get('/all', db.getAll)