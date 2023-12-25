import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

//Get all the tasks
export async function GET(request) {
  try {
    const tasks = await Task.find();
    return NextResponse.json({
      tasks,
      message: "All Tasks",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return getResponseMessage("Error in getting data!!", 404, false);
  }
}

//create all the tasks
export async function POST(request) {
  const { title, content, userid } = await request.json();
  const authToken = request.cookies.get("authToken")?.value;
  //   console.log(authToken);

  const data = jwt.verify(authToken, process.env.JWY_KEY);
  console.log(data._id);

  try {
    const task = new Task({
      title,
      content,
      userid: data._id,
    });
    const createdTask = await task.save();

    return NextResponse.json({
      createdTask,
      message: "Task Created",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create new task",
        status: false,
      },
      {
        status: 500,
      }
    );
  }
}
