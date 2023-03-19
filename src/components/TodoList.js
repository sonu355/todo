import React from 'react'
import Todo from './Todo'
export default function TodoList({todos, setTodos}) {

  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {todos.map((todo) => (
          <Todo todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} todo={todo} />
        ))}       
      </ul>
    </div>
  )
}
