import React from "react";

const TaskList = ({
  filteredTasks,
  toggleTaskCompletion,
  deleteTask,
  startEditing,
}) => {
  return (
    <ul className="space-y-4">
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          className={`flex justify-between items-center p-4 border rounded-lg ${
            task.completed ? "bg-indigo-200" : "bg-white"
          }`}
        >
          <span
            onClick={() => toggleTaskCompletion(task.id)}
            className={`cursor-pointer ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task.title}
          </span>
          <div className="flex space-x-4">
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              Delete
            </button>
            <button
              onClick={() => startEditing(task)}
              className="text-blue-500 hover:text-blue-700 focus:outline-none"
            >
              Edit
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
export default TaskList;
