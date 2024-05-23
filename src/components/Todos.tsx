import { FC } from "react";

type TodoProp = {
    todo: {
        id: number,
        title: string,
    }
}

const Todos: FC<TodoProp> = ({todo}) => {
    return <h1>{ todo.title}</h1>
}

export default Todos;