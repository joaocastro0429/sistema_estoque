import { Request, Response } from "express"
import { getAllProducts , createProduct,getProductById } from "../services/products.service.js"



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


export const getProductByIdController = async (req: Request, res: Response) => {
  try {
    // Corrigido: req.params.id (params é objeto)
    const id= req.params.id as string // ou: const id = req.params.id;
    
    // Corrigido: passar apenas o id, não {id:string}
    const product = await getProductById(id);
    
    // Verificar se o produto existe
    if (!product) {
      return res.status(404).json({ 
        message: "Produto não encontrado" 
      });
    }
    
    // Retornar o produto encontrado
    return res.status(200).json(product);
    
  } catch (err) {
    // Corrigido: throw new Error("mensagem")
    console.error(err);
    return res.status(500).json({ 
      message: "Erro interno do servidor" 
    });
  }
};