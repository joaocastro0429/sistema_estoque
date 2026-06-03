import express from 'express'
import 'dotenv/config'
import { getAllProductsController } from './controllers/products.controller.js'
const server = express()


server.get("/produtos", getAllProductsController)

server.listen(process.env.PORT)