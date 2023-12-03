import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../index.css'
import '../style.css'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import EventNotFound from './EventNotFound'

const Book = () => {
    const [book, setBook] = useState([]);
    // we have to use effect, so it won't rerender two times
    const swalModal = withReactContent(Swal);
    useEffect(() => {
        const fetchBookData = async () => {
            try {
                const res = await axios.get('http://localhost:8821/books')
                console.log('data', res.data)
                // const t= res.data;
                // t.forEach(dt =>{
                //     console.log(dt)
                // })
                setBook(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchBookData();
    }, [])

    const updateButton = () => {
        swalModal.fire({
            title: 'Submit data',
            text: 'Are you sure want to update the data ?',
            showDenyButton: true,
            showConfirmButton: true,
            denyButtonText: 'Cancel'
        })
            .then(res => {
                if (res.isConfirmed) {
                    swalModal.fire({

                    })
                }
            })
    }


    const deleteBook = (id, title) => {
        swalModal.fire({
            title: 'Delete the Book',
            text: 'Are you sure want to delete the data?',
            showConfirmButton: true,
            showDenyButton: true,
            denyButtonText: 'Cancel'
        })
            .then(async (res) => {
                if (res.isConfirmed) {
                    try {
                        await axios.delete('http://localhost:8821/books/' + id)
                        swalModal.fire({
                            title: 'Success',
                            text: `The book with title ${title} has been delete succesfully`,
                            icon: 'success'
                        }) 
                        window.location.reload()
                    } catch (error) {

                        swalModal.fire({
                            title: 'failed',
                            text: 'Error when trying to delete the book',
                            icon: 'error'
                        })

                    }
                }
                if (res.isDenied || res.isDismissed) {
                    swalModal.fire({
                        text: 'Cancelled',
                        icon: 'error'
                    })
                }
            })
    }
    if (book.length > 0) {
        return (
            <div className='App'>
                <h1>Hatsune Miku Manga Shop</h1>
                <div className='books'>
                    {
                        book.map(data => (
                            <div className='mt-2 book bg-red-600 show-book' key={data.id}>
                                <h1>{data.title}</h1>
                                <p className=''>Manga Description:{data.description}</p>
                                <p className=''>Cover : {data.cover}</p>
                                <span>Price : {data.price = null ? 'N/A' : data.price}</span>
                                <button className='update' onClick={updateButton}>Update</button>
                                <button className='delete' onClick={() => deleteBook(data.id, data.title)}>delete</button>
                            </div>
                        ))
                    }
                </div>
                <button><Link to="/add">Add new book</Link></button>
            </div>
        )
    }

    else{
        return(
            <div className='App'>
               <EventNotFound/>
            </div>
        )
    }

}

export default Book