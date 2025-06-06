import { GetServerSideProps } from "next"
import { useState } from "react"
import { Todo } from "../types/todo"
import TodoForm from "../components/TodoForm"
import TodoItem from "../components/TodoItem"

interface Props {
  initialTodos: Todo[]
}

export default function Home({ initialTodos }: Props) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  const handleAdd = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    }
    setTodos([newTodo, ...todos])
  }

  const handleToggle = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>📝 To-Do List (Next.js + SSR)</h1>
      <TodoForm onAdd={handleAdd} />
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const initialTodos: Todo[] = [
    { id: 1, title: "Aprender Next.js SSR", completed: false },
    { id: 2, title: "Crear todo list", completed: true },
  ]

  

  return {
    props: {
      initialTodos,
    },
  }
}
