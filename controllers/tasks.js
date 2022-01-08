


const getAllTasks = (req,res)=>{
    res.send('get all tasks')
}

const createTask = (req,res) =>{
    console.log(req.body);
    res.json(req.body)
}

const getTask = (req,res) =>{
    res.json({id:req.params.id})
}

const updateTask = (req,res) =>{
    res.send('update a task')
}

const deleteTask = (req,res) =>{
    res.send('delete a task')
}



module.exports = {
    getAllTasks,
    getTask,
    updateTask,
    deleteTask,
    createTask
}