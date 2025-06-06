import { useEffect, useState, FormEvent } from "react"

interface Post {
  id: number
  title: string
  body: string
}

export default function TodoFakePage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [editingId, setEditingId] = useState<number | null>(null)

  const fetchPosts = async () => {
    const res = await fetch("/api/posts")
    const data = await res.json()
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (editingId !== null) {
      await fetch(`/api/posts/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      })
    } else {
      await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      })
    }

    setTitle("")
    setBody("")
    setEditingId(null)
    fetchPosts()
  }

  const handleEdit = (post: Post) => {
    setEditingId(post.id)
    setTitle(post.title)
    setBody(post.body)
  }

  const handleDelete = async (id: number) => {
    await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    })
    fetchPosts()
  }

  return (
    <main style={{ padding: "2rem", maxWidth: 600, margin: "0 auto" }}>
      <h1>📝 Todo Fake CRUD (JSONPlaceholder)</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "1rem" }}
        />
        <textarea
          placeholder="Contenido"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          style={{ display: "block", width: "100%", marginBottom: "1rem" }}
        />
        <button type="submit">
          {editingId !== null ? "Actualizar" : "Agregar"}
        </button>
      </form>

      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem", borderBottom: "1px solid #ccc" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <button onClick={() => handleEdit(post)}>✏️ Editar</button>
            <button onClick={() => handleDelete(post.id)}>🗑 Eliminar</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
