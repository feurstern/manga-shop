import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const AddBook = () => {
  const [book, setBook] = useState({
    id: '',
    title: '',
    description: '',
    price: null,
    cover: '',
  })
  const waitSWal = withReactContent(Swal);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleClick = async e => {
    waitSWal.fire({
      title: 'Add New Book',
      text: 'Are you sure want to submit the data to server?',
      showConfirmButton: true,
      showDenyButton: true,
      denyButtonText: 'Cancel'

    }).then(async (res) => {
      console.log('data e', e);
      if (res.isConfirmed) {

        try {
          // console.log('data book', book.id)

          book.id = null ? (
            waitSWal.fire({
              title: "The id of the book should not be empty!",
              icon: 'error'
            }),
            console.log('null of book id')
          )
            : 0
          await axios.post('http://localhost:8821/books', book)
          waitSWal.fire({
            title: `The book with title ${book.title} has been added sucessfully!`,
            icon: 'success'
          })

        }
        catch (error) {
          console.log(error)
          waitSWal.fire({
            title: 'Data is error',
            icon: 'error'
          })
        }

      }
      else if(res.isDenied){
        waitSWal.fire({
          text: 'Canceled!',
          icon: 'error'
        })
      }

    })
  }
  console.log('the data:', book);
  return (
    <div className='form'>
      <h1>Add new book</h1>
      {/* make sure that you create  the value of attribute name is simmilar like you did in the usestate */}
      <input onChange={handleChange} type='text' placeholder='id' name='id' />
      <input onChange={handleChange} type='text' placeholder='title' name='title' />
      <input onChange={handleChange} type='text' placeholder='desc' name='description' />
      <input onChange={handleChange} type='text' placeholder='cover' name='cover' />
      <input onChange={handleChange} type='number' placeholder='price' name='price' />
      {/* <input onChange={handleChange} type='text' placeholder='cover' name='status' /> */}
      <button onClick={handleClick}>Add</button>

      {/* showing the result tbat currently beoing use */}
    </div>
  )
}

export default AddBook