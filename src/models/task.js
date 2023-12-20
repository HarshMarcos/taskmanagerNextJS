import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    addedDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    status:{
        type:String,
        enum:["Pending","Completed"],
        default:"Pending"
    },
    userid:{
        type:mongoose.ObjectId,
        required:true
    }
})

export const Task= mongoose.models.tasks || mongoose.model("tasks",taskSchema);