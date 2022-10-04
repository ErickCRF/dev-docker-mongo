const { connect, disconnect } = require('../config/db.config');
const { Task } = require('../model/model');
const logger = require('../logger/logger');

class TaskRepository {

    constructor() {
        connect();
    }

    async getTasks() {
        const tasks = await Task.find({});
        console.log('tasks:::', tasks);
        return tasks;
    }

    async createTask(task) {
        let data = {};
        try {
            data = await Task.create(task);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }
}

module.exports = new TaskRepository();