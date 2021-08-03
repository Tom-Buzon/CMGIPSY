const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'JPSIDASH',
    password: 'root',
    port: 5432,
})

const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const loginUser = (request, response) => {
    const mail = request.body.mail
    const password = request.body.password
    console.log(mail, password);

    pool.query('SELECT * FROM users WHERE mail = $1 and password = $2', [mail, password], (error, results) => {
        if (error) {
            throw error
        } else if (results.rowCount > 0)
            response.status(200).json(true);
        else {
            response.status(200).json(false);
        }
    })
}


const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body

    pool.query(
        'UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
    })
}

//get les projets
const getProject = (request, response) => {
        pool.query('SELECT * FROM projets ORDER BY id_projet ASC', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }
    // get les changements en fonction des projets
const getChangements = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM changements WHERE id_projet = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

// get les taches en fonction des changements
const getTaches = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM taches WHERE id_changement = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getAll = (request, response) => {
    pool.query('SELECT projets.id_projet, changements.id_changement, changements.titre, id_tache FROM public.projets, public.changements, public.taches WHERE  projets.id_projet = changements.id_projet  and changements.id_changement=taches.id_changement', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    loginUser,
    getProject,
    getChangements,
    getTaches,
    getAll
}