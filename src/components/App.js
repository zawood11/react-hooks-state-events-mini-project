import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasksList, setTasksList] = useState(TASKS);
  const [category, setCategory] = useState("All");

  function handleDelete(deletedTask) {
    const newTasksList = tasksList.filter((task) => task.text !== deletedTask)
    setTasksList(newTasksList)
  }

  function handleCategoryFilter (e) {
    setCategory(e.target.textContent)
    }
  
  const filterTasks = tasksList.filter((task) => {
      return category === "All" ? true : task.category === category
    })
  
  function handleNewTask(newTask) {
    const newTasksList = [...tasksList, newTask];
    setTasksList(newTasksList);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        handleCategoryClick={handleCategoryFilter} 
        selectCategory={category}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter((category) => category !== "All")}
        onTaskFormSubmit={handleNewTask} 
      />
      <TaskList tasks={filterTasks} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
