import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Avatar from './components/Avatar'
import PackingList from './components/PackingList'
import PeopleList from './components/List'
import Toolbar from './components/Toolbar'
import Gallery from './components/Gallery'
import Form from './components/Form'

function App() {

  return (
    <div>
      <h2>Form</h2>
      <Form />
      <h2>Gallery</h2>
      <Gallery />
      <Gallery />
      <h2>Toolbar</h2>
      <Toolbar 
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
      />
      <h2>People List</h2>
      <PeopleList />
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
