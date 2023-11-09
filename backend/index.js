import express, { json } from 'express'
import mysql from 'mysql'
import cors from 'cors';
// import uuidv4 from 'uuid/v4'


const app = express();
const date = new Date();
const today = `${date.getDate()} ${date.getMonth()} `;
console.log('today', date)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'manga_book_shop'
});
const idTest = 'test123'
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.json('backend is connected!')
})

//  creating endpoint to get all books
app.get('/books', (req, res) => {
    const query = "select * from books where status =1 order by ts_insert ASC"
    db.query(query, (err, data) => {
        if (err) {
            console.log('error')
        }
        else {
            return res.json(data)
        }
    })
})

app.get('/anime', (req, res) => {
    const query = "SELECT * from anime_data where status =1";
    db.query(query, (err, data) => {
        if (err) {
            console.log('error')
        }
        else {
            if (data != null) {
                return res.json(data);
            }
            else {
                console.log('no data to display!');
            }
        }
    })
})

app.post('/anime', (req, res) => {
    const q = "INSERT into anime_data (`id`, `anime_title`, `anime_genre`, `anime_desc`, `status`) VALUES(?)"

    //  post to the server 
    const values = [
        req.body.id,
        req.body.anime_title,
        req.body.anime_genre,
        req.body.anime_desc,
        1,
        // req.body.ts_insert
    ]

    db.query(q, [values], (err, data) => {
        if (err){
            return res.json(err);
        }
        else {
            return res.json(data);
        }
    })

})

app.post('/books', (req, res) => {
    const query = " INSERT into books (`id`, `title`, `description`, `cover`, `price`, `status`) VALUES(?)";


    const values = [
        req.body.id,
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.price,
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
app.listen(8821, () => {
    console.log('connected to the back end!!')
})

//  we have to make different folder to create routes and db configuration