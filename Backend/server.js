require('dotenv').config();
const express = require('express') ;
const app = express() ;

const db = require('./models') ;
const POST = 3000 ;

db.sequelize.authenticate()
.then(() => {
    console.log('ket noi database thanh cong')
})
.catch((error) => {
    console.log('ket noi database that bai' , error)
})
app.listen(POST ,() => {
    console.log(`Su kien lang nghe tai http://localhost:${POST}`)
})