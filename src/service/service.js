const taskRepository  = require('../repositorio/repositorio');

class TaskService {

    constructor() {}

    async getTasks() {
        return await taskRepository.getTasks();
    }

    async createTask(task) {
        return await taskRepository.createTask(task);
    }

}

module.exports = new TaskService();