import express from 'express'
import mysql from 'mysql'

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
    const query = " INSERT into books (`id`, `title`, `description`, `cover`, `status`) VALUES(?)";
                   
            
    const values = ['CFO00X', 'In the house of my parent', 'Have you even see Nazism into your body spirit?', 'NSDAP', 1 ]
    
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