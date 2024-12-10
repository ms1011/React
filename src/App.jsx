import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Avatar from './components/Avatar'
import PackingList from './components/PackingList'

function App() {

  return (
    <div>
      <h2>Packing List</h2>
      <PackingList />
      <h2>Todo List</h2>
      <Todo />
      <h2>Avatar</h2>
      <Avatar />
    </div>
  )
}

export default App
