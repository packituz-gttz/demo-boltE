import React from 'react'
import { CheckCircle, XCircle } from 'lucide-react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  return (
    <li className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md mb-2">
      <div className="flex items-center">
        <button onClick={() => onToggle(todo.id)} className="mr-3 focus:outline-none">
          {todo.completed ? (
            <CheckCircle className="w-6 h-6 text-green-500" />
          ) : (
            <div className="w-6 h-6 border-2 border-gray-400 rounded-full"></div>
          )}
        </button>
        <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
          {todo.text}
        </span>
      </div>
      <button onClick={() => onRemove(todo.id)} className="focus:outline-none">
        <XCircle className="w-6 h-6 text-red-500" />
      </button>
    </li>
  )
}

export default TodoItem
