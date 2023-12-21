import { Task } from "@/models/task";
import { NextResponse } from "next/server";

//  localhost:3000/api/users/[userid]/tasks
export async function GET(request, { params }){
    const { userid } = params;

    try {
        const usertask = await Task.find({
            userid:userid
        })

        return NextResponse.json({
            usertask,
            message:"Success",
            status:true
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"Failed to retreive tasks",
            status:false
        })
    }
}