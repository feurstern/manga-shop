import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Book = () => {
    const [book, setBook] = useState([]);
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
    return (
        <div>
            <h1>Hatsune Miku Manga Shop</h1>
            <div className='book-list'>
                {
                    book.map(data => (
                        <div className='mt-2 bg-red-600 show-book' key={data.id}>
                           <h1>{data.title}</h1>
                           <p className=''>Manga Description:{data.description}</p>
                           <p className=''>Cover : {data.cover}</p>
                           <span>Price : {data.price}</span>
                        </div>
                    )) 
                }
            </div>
            <button><Link to="/add">Add new book</Link></button>
        </div>
    )
}

export default Book