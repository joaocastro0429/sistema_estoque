import {prisma} from '../lib/prisma.js'

export const getAllProducts=async()=>{

    prisma.produto.findMany()  

}