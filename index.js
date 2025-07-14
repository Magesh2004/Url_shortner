require('dotenv').config();
const express = require('express')
const app = express()
const urlRouter = require('./routes/url')

app.listen(8000,()=>{
    console.log("Server is running on port 8000")
})


app.use(express.json())
app.use('/',urlRouter);

app.all('/{*any}',(req,res)=>{
    throw new Error(404,"page not found")
})

app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Internal server error";
    res.status(status).json({message})
})

