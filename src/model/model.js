const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({ cadena: 'string', 
                    entrada : { type : Array , "default" : [] },
                    salida : { type : Array , "default" : [] },
                    createDate: 'date', 
                    updatedDate: 'date', 
                    createdBy: 'string', 
                    updatedBy: 'string' },
                { timestamps: { createDate: 'created_at', updatedDate: 'updated_at'}});

const Task = mongoose.model('culqi', taskSchema);

module.exports = {
    Task
}