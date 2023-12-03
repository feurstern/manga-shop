import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Book from './pages/Book'
import AddBook from './pages/AddBook'
import Udpdate from './pages/Udpdate'
import Delete from './pages/Delete'
import Anime from './pages/Anime'
import ShowAnime from './pages/ShowAnime'

const App = () => {
  return (
    <div className=''>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Book/>}></Route>
        <Route path='/add_book' element={<AddBook />}></Route>
        <Route path='/update' element={<Udpdate/>}></Route>
        <Route path='/delete' element={<Delete/>} />
        <Route path='/anime' element={<Anime/>}/>
        <Route path='/show_anime' element={<ShowAnime/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App