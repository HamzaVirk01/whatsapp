const express = require('express');
const handler = require('./middleware/handler');
const connect = require('./Config/connectDB');
const app = express();

require('dotenv').config();
require('colors');
    
app.use(express.json());
app.use(express.urlencoded({extended:false}))

connect()

app.use('/api/users/', require('./Routes/userRoutes'))
app.use(handler)


app.listen(process.env.PORT,()=>console.log(`Server is running on port: ${process.env.PORT.blue}`))

