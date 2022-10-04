const taskService  = require('../service/service');
const logger = require('../logger/logger');

class TodoController {

    async getTasks() {
        logger.info('Controller: getTasks')
        return await taskService.getTasks();
    }

    async createTask(task) {
            const indices = [];
            let wstring = task.cadena;
            let words = task.entrada;
            if (wstring === null || wstring.length === 0 || words === null || words.length == 0) {
                return indices;
            }
            const contarword = words.reduce((a, b) => {
                a[b] = (a[b] + 1) || 1;
                return a;
            }, {});
            const lnword = words[0].length;
            const wordArrayLength = lnword * words.length;
            for (let i = 0; i <= wstring.length - wordArrayLength; i++) {
                let current = wstring.substring(i, i + wordArrayLength);
                const wordMap = {};
                let index = 0;
                let j = 0;
                while (index < words.length) {
                    const part = current.substring(j, j + lnword);
                    wordMap[part] = (wordMap[part] + 1) || 1;
                    j += lnword;
                    index++;
                }
                let a = JSON.stringify(Object.entries(contarword).sort());
                let b = JSON.stringify(Object.entries(wordMap).sort());
                if (a === b) {
                    indices.push(i);
                }
            }
            console.log(indices);
            task['salida'] = indices;
        logger.info('Controller: createTask', task);
        return await taskService.createTask(task);
    }
}
module.exports = new TodoController();