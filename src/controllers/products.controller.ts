import { Request, Response } from "express"
import { getAllProducts , createProduct } from "../services/products.service.js"



export const getAllProductsController = async (req:Request, res:Response)=>{
    const products = await getAllProducts()
     res.status(200).json(products)
}

export const createProductsController = async (
    req: Request,
    res: Response
  ) => {
    try {
      const product = req.body
  
      const createdProduct = await createProduct(product)
  
      return res.status(201).json(createdProduct)
    } catch (err) {
      return res.status(500).json({
        message: "Erro ao criar produto"
      })
    }
}