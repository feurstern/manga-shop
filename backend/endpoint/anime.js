app.post('/anime', (req, res) => {
    const query = " INSERT into anime_data (`id`, `anime_title`, `anime_genre`, `anime_desc`, `status`) VALUES(?)";


    // we got the major problem that we can't 
    const values = [
        generateId(5),
        req.body.anime_title,
        req.body.anime_genre,
        req.body.anime_desc,
        1
    ]

    db.query(query, [values], (err, data) => {
        if (err) {
            return res.json(err)
        }
        else {
            return res.json(data);
        }
    })
})
