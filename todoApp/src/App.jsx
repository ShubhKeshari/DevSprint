import { useState } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [inputTask, setInputTask] = useState({ name: "", description: "" });
  const [editTask, setEditTask] = useState({
    id: "",
    name: "",
    description: "",
  });
  const addTask = () => {
    setTask((prev) => {
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          name: `${inputTask.name}`,
          description: `${inputTask.description}`,
        },
      ];
    });
    setInputTask({ name: "", description: "" });
    console.log(task);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleEdit = (taskData) => {
    const editData = task.filter((item, index) => item.id === taskData.id);
    setEditTask(editData[0]);
  };
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (data) => {
    setTask((prev) => {
      return prev.map((item) => (item.id === data.id ? data : item));
    });
    setEditTask({ id: "", name: "", description: "" });
  };
  const handleDelete = (data) => {
    setTask((prev) => {
      return prev.filter((item) => item.id !== data.id);
    });
  };

  return (
    <>
      <label htmlFor="taskName">Task Name:</label>
      <input
        onChange={handleChange}
        id="taskName"
        name="name"
        value={inputTask.name}
      />
      <label htmlFor="taskDescription">Task Description:</label>
      <input
        onChange={handleChange}
        name="description"
        id="taskDescription"
        value={inputTask.description}
      />
      <button onClick={addTask}>Add Task</button>
      {task.map((item, index) => {
        return (
          item.name !== "" && (
            <div key={index}>
              <div>Task Name: {item.name}</div>
              <div>Task Description: {item.description}</div>
              <button onClick={() => handleEdit(item)}>Edit</button>
              {editTask.id === item.id && (
                <>
                  <input
                    onChange={handleEditChange}
                    name="name"
                    value={editTask.name}
                  />
                  <input
                    onChange={handleEditChange}
                    name="description"
                    value={editTask.description}
                  />
                  <button onClick={() => handleSave(editTask)}>Save</button>
                </>
              )}
              <button
                onClick={() => {
                  handleDelete(item);
                }}
              >
                Delete
              </button>
            </div>
          )
        );
      })}
    </>
  );
}

export default App;
