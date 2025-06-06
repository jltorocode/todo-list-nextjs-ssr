import { useState, FormEvent } from "react"

interface Props {
  onAdd: (title: string) => void
}

const TodoForm = ({ onAdd }: Props) => {
  const [title, setTitle] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      onAdd(title)
      setTitle("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Nueva tarea..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default TodoForm
