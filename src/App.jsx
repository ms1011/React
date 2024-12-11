import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Todo from './components/Todo'
import Avatar from './components/Avatar'
import PackingList from './components/PackingList'
import PeopleList from './components/List'
import Toolbar from './components/Toolbar'
import Gallery from './components/Gallery'
import Form from './components/Form'
import Counter from './components/Counter'
import MovingDot from './components/MovingDot'
import Form2 from './components/Form2'
import FormImmer from './components/FormImmer'

function Home() {
    return (
      <div>
        <h2>Counter</h2>
        <Counter />
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

function DotPage() {
  return <MovingDot />;
}

function Form2Page() {
  return <Form2 />
}

function FormImmerPage() {
  return <FormImmer />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dot' element={<DotPage />} />
        <Route path='/form2' element={<Form2Page />} />
        <Route path='/formimmer' element={<FormImmerPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
