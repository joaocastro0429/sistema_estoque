import { Request, Response } from "express"
import { getAllProducts } from "../services/products.service.js"



export const getAllProductsController = async (req:Request, res:Response)=>{
    const products = await getAllProducts()
     res.status(200).json(products)
}