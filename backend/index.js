import express from 'express'
import mysql from 'mysql'
import cors from 'cors';

const app = express();
const date = new Date();
const today = `${date.getDate()} ${date.getMonth()} `;
console.log('today', date )
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'manga_book_shop'
});

app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.json('backend is connected!')
})

//  creating endpoint to get all books
app.get('/books', (req, res) => {
    const query = "select * from books"
    db.query(query, (err, data) => {
        if (err) {
            console.log('error')
        }
        else {
            return res.json(data)
        }
    })
})

app.post('/books', (req, res) => {
    const query = " INSERT into books (`id`, `title`, `description`, `cover`, `price`, `status`) VALUES(?)";
                   
            
    const values = [
        cfo002x,
        req.body.id,
        req.body.title,
        req.body.description,
        req.body.cover,
        req.body.price,
        1     
     ]
    
    db.query(query, [values], (err,data)=>{
        if(err){
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