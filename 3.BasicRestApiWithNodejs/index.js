// importing libraries
const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

// middlewares
app.use(cors())
app.use(express.json())


// demo database
const TODO_DATABASE = [{
    id: 1,
    task: 'Make a button'
}]

// endpoints

// Get endpoint (for showing all the data in db)
app.get('/api/v1/', (req, res) => {
  return res.json(TODO_DATABASE)
})

// Post endpoint (for adding new data in db)
app.post('/api/v1/', (req, res) => {
    const { task }= req.body
    
    const newData = {
        id: TODO_DATABASE.length + 1,
        task
    }

    TODO_DATABASE.push(newData)

    return res.json(TODO_DATABASE)
})

// Delete endpoint (for deleting a data from db)
app.delete('/api/v1/:id', (req, res) => {
    const { id } = req.params;

    const deletedIndex = TODO_DATABASE.findIndex(item => item.id == id);

    TODO_DATABASE.splice(deletedIndex, 1);

    return res.json(TODO_DATABASE)
})

// Put endpoint (for updating a data from db)
app.put('/api/v1/:id', (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    const updateIndex = TODO_DATABASE.findIndex(item => item.id == id);

    TODO_DATABASE[updateIndex].task = task

    return res.json(TODO_DATABASE)
})


// starting server in port (4000)
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})