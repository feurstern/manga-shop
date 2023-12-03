import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const Anime = () => {
  const [anime, setAnime] = useState({
    id: '',
    anime_title: '',
    anime_genre: '',
    anime_desc: '',
  });

  const waitSwal = withReactContent(Swal);

  const handleChange = (e) => {
    setAnime((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };


  const handleClick = () => {
    waitSwal.fire({
      title: 'Confirmation',
      text: `Are you sure want to add the data?`,
      showConfirmButton: true,
      showDenyButton: true,
      denyButtonText: 'Cancel'
    })
      .then(async (res) => {
        if (res.isConfirmed) {
          try {
            await axios.post('http://localhost:8821/anime', anime);
            waitSwal.fire({
              title: `${anime.anime_title} has been submit succesfully`,
              icon: 'success',
              
            })

          } catch (error) {
            waitSwal.fire({
              title: 'Error when try to submit data',
              icon: 'error'
            })

          }

        }
      })
  }

  console.log(anime)


  useEffect(() => {

  })

  return (
    <div>
      <h1>Add new anime</h1>
      <section>
        <input onChange={handleChange} placeholder='id' type='text' name='id' id='id'></input>
        <input onChange={handleChange} placeholder='title' type='text' name='anime_title' id='anime_title'></input>
        <input onChange={handleChange} placeholder='genre' type='text' name='anime_genre' id='anime_genre'></input>
        <input onChange={handleChange} placeholder='desc' type='text' name='anime_desc' id='anime_desc'></input>
      </section>

      <button className='mt-2' type='button' onClick={handleClick}>Submit</button>

      <>
        {/* {anime.anime_title} */}
      </>
    </div>
  )
}

export default Anime