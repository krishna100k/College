import mysql from "mysql"

const connection = mysql.createConnection({
    host: "localhost",
    user: "krishna",
    password: "9975151297",
    database: "college"
})

connection.connect((err) => {
    if(err){
        return err 
    }

    console.log("Connection to DB successfull")
})

export default connection