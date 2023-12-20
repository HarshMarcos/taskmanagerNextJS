

//api/tasks/{taskId}

// import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }){

    const { taskId } = params;

    try {
        const tasks = await Task.findById(taskId);
        return NextResponse.json({
            tasks,
            message:"Success",
            status:true
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            
            message:"Failed",
            status:false
        })
    }

}


export async function PUT(request, { params }){

    const { taskId } = params

    try {
        const { title,content,status } = await request.json();

        let tasks = await Task.findById(taskId);
        tasks.title=title;
        tasks.content=content;
        tasks.status=status;

        const updatedTasks = await tasks.save();

        return NextResponse.json({
            updatedTasks,
            message:"Updated Successfully",
            status:true
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"Failed to update task",
            status:false
        })
    }
}

export async function DELETE(request, { params }){

    const { taskId } = params;

    try {
        await Task.deleteOne({
            _id:taskId
        });
        return NextResponse.json({
            message:"Successfully deleted task",
            status:true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Failed to delete task",
            stauts:false
        })
    }
}