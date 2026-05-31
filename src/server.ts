import express from 'express'
import 'dotenv/config'

const server = express()


server.get("/produtos",(req,res)=>{
    return res.send("Hello world")
})

server.listen(process.env.PORT)