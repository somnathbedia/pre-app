import { useEffect, useState } from "react";
import Todos from "./components/Todos";

type TodoType = {
  id: number;
  title: string;
};

function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const todoList = [
    {
      id: 1,
      title: "Go to Gym from5-7am",
    },
    {
      id: 2,
      title: "Sleeping time",
    },
    {
      id: 3,
      title: "Attend college lecture",
    },
  ];

  useEffect(() => {
    setTodos(todoList);
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setTodos([
            ...todos,
            {
              id: Math.floor(Math.random() * 10000),
              title: Date().toString() + "New Todo",
            },
          ]);
        }}
      >
        Add Todo
      </button>
      {todos.map((todo) => {
        return <Todos key={todo.id} id={todo.id} title={todo.title} />;
      })}
    </div>
  );
}

export default App;
