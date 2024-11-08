"use client";
import { useEffect, useState } from "react";
const TaskForm = ({ addOrUpdateTask, task = {}, editTask }) => {
  const [newTask, setNewTask] = useState(task.title || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrUpdateTask(newTask);
    setNewTask(""); // Clear the input after submitting
  };

  useEffect(() => {
    if (editTask) {
      setNewTask(editTask.title);
    }
  }, [editTask]); // Reset input when editTask changes

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
      <input
        type="text"
        placeholder="Enter task title"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className={`px-6 py-3 ${
          editTask
            ? "bg-yellow-500 hover:bg-yellow-600"
            : "bg-green-500 hover:bg-green-600"
        } text-white font-semibold rounded-md transition`}
      >
        {editTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
