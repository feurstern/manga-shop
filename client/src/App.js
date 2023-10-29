import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Book from './pages/Book'
import Add from './pages/Add'
import Udpdate from './pages/Udpdate'
import Delete from './pages/Delete'

const App = () => {
  return (
    <div className=''>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Book/>}></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/update' element={<Udpdate/>}></Route>
        <Route path='/delete' element={<Delete/>} />
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App