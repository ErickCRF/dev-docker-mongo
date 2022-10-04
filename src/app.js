const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const taskController = require('./controller/controller')



const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/api/tasks', (req, res) => {
    taskController.getTasks().then(data => res.json(data));
});

app.post('/api/task', (req, res) => {
    taskController.createTask(req.body).then(data => res.json(data));
});

app.get('/', (req, res) => {
    res.send(`<h1>holaaaa !!!</h1>`)
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})