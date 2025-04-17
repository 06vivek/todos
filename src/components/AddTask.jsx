import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function AddTask() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const Id = searchParams.get("Id");
  const navigate = useNavigate();

  useEffect(() => {
    if (Id) {
      const Edit = todos.find((todo) => todo.id === Id);
      setInput(Edit.input);
    }
  }, [Id]);

  const handleupdate = () => {
    if (input.trim() === "") return;
    if (Id) {
      const update = todos.map((todo) =>
        todo.id === Id ? { ...todo, input } : todo
      );
      setTodos(update);
    } else {
      const newTask = { id: Date.now().toString(), input };
      setTodos([...todos, newTask]);
    }

    setInput("");
    setSearchParams({});
  };

  const handledelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.length < 3) {
      setError("Must be at least 3 character");
    } else if (value.length > 10) {
      setError("Must be at most 10 character");
    } else {
      setError("");
    }
  };

  return (
    <div className="p-4">
      <form>
        <input
          className=" border-2  p-2 mr-2 w-100"
          value={input}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button
          type="button"
          onClick={handleupdate}
          className="bg-green-500 p-2 rounded"
          disabled={error}
        >
          {Id ? "UPDATE" : "ADD"}
        </button>
        <br />
        {error && (
          <span style={{ color: "red", fontSize: " 10px" }}>{error}</span>
        )}
      </form>

      <h2 className="mt-6 text-2xl flex justify-center font-bold">
        Your Tasks
      </h2>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex justify-between mt-2">
            {todo.input}
            <div className="space-x-2">
              <button
                onClick={() => navigate(`/addtask?Id=${todo.id}`)}
                className="bg-yellow-800 p-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handledelete(todo.id)}
                className="bg-red-800 p-2  rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddTask;
