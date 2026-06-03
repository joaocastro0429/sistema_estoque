import {prisma} from '../lib/prisma.js'

const serviceProducts=()=>{

    prisma.produto.findMany()
    

}