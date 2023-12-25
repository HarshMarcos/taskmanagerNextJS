"use client";

import UserContext from "@/context/userContext";
import { getTaskOfUser } from "@/services/taskService";
import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const context = useContext(UserContext);
  async function loadTasks(userid) {
    try {
      const tasks = await getTaskOfUser(userid);
      setTasks([...tasks].reverse());
      console.log(context._id);
      console.log(tasks);
    } catch (error) {
      console.log(error);
    }
  }
  loadTasks(context.user);

  // useEffect(() => {
  //   if (context.user) {
  //     loadTasks(context.user._id);
  //   }
  // }, [context.user]);
  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3">Your Tasks ({tasks.length})</h1>
        {tasks.map((task, i) => (
          <Task task={task} key={task._id} />
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
