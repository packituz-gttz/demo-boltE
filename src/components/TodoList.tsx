import React from 'react'
import TodoItem from './TodoItem'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodoListProps {
  todos: Todo[]
  onToggle: (id: number) => void
  onRemove: (id: number) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500">No todos yet. Add one above!</p>
  }

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  )
}

export default TodoList
