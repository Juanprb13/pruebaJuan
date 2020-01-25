'user strict'
const mysql = require('mysql') 

//se hace la conexión local  

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3306,
    database:'pruebaJuan',
    password:''
})

connection.connect(error=>{
    if (error) {
        console.log(error);
    }
    console.log('corriendo BD');
    
})
module.exports = connection