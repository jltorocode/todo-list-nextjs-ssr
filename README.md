# ✅ todo-list-nextjs-ssr

Aplicación de lista de tareas desarrollada con **Next.js** y **renderizado del lado del servidor (SSR)**. Permite agregar, listar, marcar como completadas y eliminar tareas en una interfaz simple y eficiente.

---

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/) (SSR y rutas automáticas)
- React
- TypeScript (opcional)
- CSS Modules o Tailwind CSS (según implementación)
- Local state o persistencia con API Routes / DB (según configuración)
- `getServerSideProps` para SSR

---

## 🖼️ Funcionalidades principales

- ✅ Agregar una nueva tarea
- 📋 Listar tareas existentes
- 🟢 Marcar tareas como completadas o pendientes
- ❌ Eliminar tareas
- 🔄 Renderizado del lado del servidor (`getServerSideProps`)

---

## 🌐 Rutas (Frontend y Backend)

### 🔸 Frontend (`pages/`)

| Ruta               | Método | Descripción                                 |
|--------------------|--------|---------------------------------------------|
| `/`                | GET    | Página principal, lista tareas vía SSR      |
| `/todo-fake`       | GET    | Página CRUD conectada a jsonplaceholder     |

---

### 🔹 Backend (`pages/api/`)

| Ruta                   | Método           | Descripción                                      |
|------------------------|------------------|--------------------------------------------------|
| `/api/todos`           | GET, POST        | Listar o agregar tareas (modo local/API)         |
| `/api/posts`           | GET, POST        | CRUD desde JSONPlaceholder (proxy externo)       |
| `/api/posts/[id]`      | GET, PUT, DELETE | Operaciones por ID vía JSONPlaceholder (proxy)   |

> 🔁 Las rutas `/api/posts` y `/api/posts/[id]` funcionan como intermediarios hacia `https://jsonplaceholder.typicode.com/posts`.

---

## 🗂️ Estructura del proyecto

```
todo-list-nextjs-ssr/
├── pages/
│   ├── index.tsx              # Página principal (SSR)
│   ├── todo-fake/index.tsx    # CRUD con JSONPlaceholder
│   └── api/
│       ├── todos.ts
│       └── posts/
│           ├── index.ts
│           └── [id].ts
├── components/
│   ├── TodoForm.tsx
│   └── TodoItem.tsx
├── styles/
│   └── Home.module.css
├── types/
│   └── todo.ts
├── utils/
│   └── storage.ts
├── public/
└── README.md
```

---

## 📦 Instalación y uso

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/todo-list-nextjs-ssr.git
   cd todo-list-nextjs-ssr
   ```

2. Instala dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre en tu navegador:  
   [http://localhost:3000](http://localhost:3000)

---

## ⚙️ SSR con `getServerSideProps`

El listado de tareas se obtiene en tiempo real en el servidor usando:

```ts
export const getServerSideProps = async () => {
  const todos = await fetchTodos()
  return { props: { todos } }
}
```

Esto asegura que el contenido esté disponible al cargar la página, útil para SEO y rendimiento inicial.

---

## 🧪 Mejoras posibles

- 📁 Persistencia con base de datos (PostgreSQL, MongoDB)
- 🌐 Autenticación (NextAuth.js)
- ☁️ Deploy en Vercel con entorno de producción
- 🔐 Guardado en API real vía API Routes

---

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Guía de SSR](https://nextjs.org/docs/basic-features/pages#server-side-rendering)
- [Vercel para despliegue](https://vercel.com/)

---

## 🪪 Licencia

MIT © 2025 — Proyecto simple para practicar SSR con Next.js.
