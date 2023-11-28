
import mongoose from "mongoose";

import express from "express";

const app = express()
const router = express.Router();

app.use(express.json())

const connectionData = async() => {
    await mongoose.connect('mongodb://127.0.0.1:27017/todo')
}
connectionData().then(() => {
    console.log("Connection Successful")
}).catch(err => {
    console.log(err);
})


const TodoSchema = new mongoose.Schema({
    text: String,
    status: Boolean,
    
})
const todoModel = mongoose.model('todo', TodoSchema)


router.get('/', (req, res) => {
    res.status(200).send({
        success: true,
    })
})
router.get('/todo', async(req, res) => {
    let todos = await todoModel.find()
    res.status(200).json({
        success: true,
        todos
    })

})
router.post('/add-todo', async(req, res) => {
    const {text, status} = req.body;
    let todos = await todoModel.create({
        text, status
    })
    res.status(200).json({
        success: true,
        task: "Task Added" 

    })
})
router.patch('/update-todo', async(req, res) => {
    const {text,status, updateText} = req.body;
    let todos = await todoModel.findOneAndUpdate({text}, {text: updateText})
    res.status(200).json({
        success: true,
        task: "Task Updated" 
    })
})

router.delete('/delete-todo', async(req, res) => {
    const {text} = req.body;
    let todos = await todoModel.findOneAndDelete({text})
    console.log(todos)
    if(todos) {
        res.status(200).json({
            success: true,
            task: "Task Deleted"
        })
        return;
    }
    res.status(200).json({
        success: true,
        task: "Task Not Found"
    })
})

router.get('/todo/:status',async (req, res) => {
    let {status} = req.params;
    status == "complete" ? status = true: status=  false
    let todos = await todoModel.find({status})
    if(status) {
        res.status(200).json({
            success: true,
            todos
        })
        return;
    }
    res.status(200).json({
        success: false,
        todos
    })

})






app.use(router)


app.listen(8000, () => {
    console.log('Running on PORT: 8000');
})