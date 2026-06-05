import {prisma} from '../lib/prisma.js'
import { Product } from '../types/products.js'



export const getAllProducts=async()=>{

    const product = await prisma.produto.findMany()
    return product

}


export const createProduct=async(product:Product)=>{
const products=   await prisma.produto.create({
        data:product
    })
    return products
}


export const getProductById = async(id:string)=>{
    const product = await prisma.produto.findUnique({
        where:{id}
    })
    return product
}