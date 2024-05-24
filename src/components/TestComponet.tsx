import { useState } from "react";

type TodoType = {
  id: number;
  title: string;
};

const TestComponent = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: 1,
      title: "Hit gym from 6-8 am",
    },
    {
      id: 2,
      title: "Attend college lecture from 10 o'clock",
    },
    {
      id: 3,
      title: "Game time from 5pm to 6:30pm",
    },
  ]);

  const addTodo = () => {
    setTodos([
      { id: Math.floor(Math.random() * 100000), title: title },
      ...todos,
    ]);
    setTitle("");
  };

  const deleteTodo = (id: number) => {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
  };

  return (
    <div className="flex justify-center items-center my-28">
      <div className="w-72">
        <button
          className="w-full h-8 bg-green-700 text-white"
          onClick={addTodo}
        >
          Add Todo
        </button>
        <div className="grid gap-3">
          <input
            className="h-8 text-xs"
            type="text"
            placeholder="Enter Task"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          {
            <ul className="font-sans text-sm list-none cursor-pointer">
              {todos.map((todo) => {
                return (
                  <li
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                    key={todo.id}
                  >
                    {todo.title}
                  </li>
                );
              })}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
