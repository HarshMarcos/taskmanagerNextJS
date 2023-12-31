import UserContext from "@/context/userContext";
import React, { useContext } from "react";

const Task = ({ task }) => {
  const { user } = useContext(UserContext);
  return (
    <div className="bg-gray-800 shadow-lg mt-2 rounded-md">
      <div className="p-5">
        <h1 className="text-2xl font-medium">{task.title}</h1>
        <p className="font-normal">{task.title}</p>
        <p className="text-right">
          <b>
            Author: <span className="font-bold">{user.name}</span>
          </b>
        </p>
      </div>
    </div>
  );
};

export default Task;
