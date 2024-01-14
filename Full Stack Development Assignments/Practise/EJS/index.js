import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import connection from "./db.js"


const PORT = 3000
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));



app.set("view engine", "ejs");

const data = [
    { name: 'Atharv Patil' },
    { name: 'Kartik Bapna' },
    { name: 'Aditya Todphod' }
];

app.get("/", (req, res) => {
    res.render("index")
})

app.get('/userinfo', (req, res) => {
    connection.query(`SELECT * FROM auth`, (err, result) => {
        if(err){
            throw new Error
        }

        res.send(result)

    })
});

app.post("/register", (req, res) => {

    const username = req.body.username
    const password = req.body.password
    console.log(username)
    console.log(password)
    connection.query(`INSERT INTO auth (username, password) VALUES ('${username}', '${password}')`, (err, result) => {
        if(err){
            console.log(err)
        }
        res.status(200).send(result)
    })
})


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})