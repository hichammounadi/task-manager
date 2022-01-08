const express = require('express')
const app = express()
const tasks = require('./controllers/tasks')
// setting the port
const port = 3000
app.use('/api/v1/tasks', tasks)
//ROUTES
app.get('/', (req, res) => {
    res.send('Task manager app')
})


app.listen(port, console.log(`server is listening on port ${port}....`))