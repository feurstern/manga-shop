import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ShowAnime = () => {

    const [anime, setAnime] = useState([]);

    useEffect(() => {
        const fetchAnimeData = async () => {
            try {
                const res = await axios.get('http://localhost:8821/anime')
                setAnime(res.data);
            }
            catch (error) {
                console.log('error')

            }
        }

        fetchAnimeData();
    }, [])

    if (anime.length > 0) {

        return (
            <div className='App'>
                <div className='books'>
                    {
                        anime.map(data => (
                            <div className='mt-2'>
                                <h1> Title : {data.anime_title}</h1>
                                <h2> Genre : {data.anime_genre}</h2>
                                <h2>description : ${data.anime_desc}</h2>
                                <button onClick=''>Update</button>
                                <button onClick=''>Delete</button>
                            </div>
                        ))

                    }

                </div>

            </div>
        )
    }
    else {
        return (

            <div className='App'>
                No data to display!
            </div>
        )
    }

}


export default ShowAnime