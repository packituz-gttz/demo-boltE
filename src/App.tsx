import React, { useState } from 'react'
import TodoList from './components/TodoList'
import { ClipboardList } from 'lucide-react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    }
    setTodos([newTodo, ...todos])
    setInput('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-6 shadow-md">
        <div className="container mx-auto flex items-center justify-center">
          <ClipboardList className="w-10 h-10 mr-2" />
          <h1 className="text-3xl font-bold">My Beautiful Todo App</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
          <form onSubmit={addTodo} className="flex mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a new todo"
              className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r-md flex items-center"
            >
              Add
            </button>
          </form>
          <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
        </div>
      </main>
      <footer className="text-center py-4 text-gray-600">
        <p>
          Photo by <a className="underline" href="https://unsplash.com/" target="_blank" rel="noreferrer">Unsplash</a>
        </p>
      </footer>
    </div>
  )
}

export default App
