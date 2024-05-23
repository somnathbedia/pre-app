import { FC } from "react";

type TodoProp = {
  id: number;
  title: string;
};

const Todos: FC<TodoProp> = ({ id, title }) => {
 
    
  return (
    <li className="list-none">
      <h1>{id}</h1>
      <p>{title}</p>
    </li>
  );
};

export default Todos;
