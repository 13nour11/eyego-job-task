"use client";
import FilterButtons from "@/components/FilterButtons";
import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [isClient, setIsClient] = useState(false);
  const [editTask, setEditTask] = useState(null); // Track task being edited

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addOrUpdateTask = (taskTitle) => {
    if (editTask) {
      // Update existing task
      setTasks(
        tasks.map((task) =>
          task.id === editTask.id ? { ...task, title: taskTitle } : task
        )
      );
      setEditTask(null); // Reset edit mode
    } else {
      // Add new task
      setTasks([
        ...tasks,
        { id: uuidv4(), title: taskTitle, completed: false },
      ]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  const startEditing = (task) => {
    setEditTask(task);
  };

  useEffect(() => {
    setIsClient(true);
    if (tasks.length === 0) {
      setTasks([{ id: uuidv4(), title: "Sample Task", completed: false }]);
    }
  }, []);
  
  return (
    // #906387
    <div className="bg-cyan-950 min-h-screen py-8">
    {isClient && (
      <div className="max-w-xl mx-auto p-6 bg-indigo-100 rounded-lg shadow-lg ">
        <h1 className="text-2xl font-bold text-center text-cyan-800 mb-6">
          Task Manager
        </h1>
        <TaskForm
          addOrUpdateTask={addOrUpdateTask}
          task={editTask || {}}
          editTask={editTask}
        />
        <FilterButtons setFilter={setFilter} />
        <TaskList
          filteredTasks={filteredTasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
          startEditing={startEditing}
        />
      </div>
    )}
    </div>
  );
}
