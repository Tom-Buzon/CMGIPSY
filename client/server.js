/* const { Pool, Client } = require('pg')
const connectionString = 'popstgressql://postgres:root@localhost:5432/JPSIDASH'

const client = new Client({
    connectionString: connectionString,
})

client.connect()

client.query('SELECT * from users', (err, res) => {
    console.log(err, res)
    client.end()
}) */