import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//Get all the tasks
export async function GET() {

}


//create all the tasks
export async function POST(request){

    const{ title,content,userid } = await request.json();

    try {
        const task = new Task({
            title,
            content,
            userid
        });
        const createdTask = await task.save();

        return NextResponse.json({
            createdTask,
            message:"Task Created",
            status:true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Failed to create new task",
            status:false
        })
    }

}