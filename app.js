const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
// setting the port
const port = 3000
app.use('/api/v1/tasks', tasks)

// middleware
app.use(express.json())

//ROUTES
app.get('/hello', (req, res) => {
    res.send('Task manager app')
})


app.listen(port, console.log(`Server is listening on port ${port}....`))