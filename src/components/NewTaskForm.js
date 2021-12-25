import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

function handleDetailsChange(e) {
  setText(e.target.value)
}

function handleCategoryChange(e) {
  setCategory(e.target.value)
}

function handleSubmit(e) {
  e.preventDefault();
  const newTask = {
    text,
    category
  };
  onTaskFormSubmit(newTask);
  setText("");
  setCategory("Code");
}

  return (
    <form 
      className="new-task-form"
      onSubmit={handleSubmit}
    >
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          placeholder="Add details here..."
          value={text}
          onChange={handleDetailsChange}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={category}
          onChange={handleCategoryChange}
          >
          {categories.map((category) => <option>{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
