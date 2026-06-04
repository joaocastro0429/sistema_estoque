import { Status } from "../generated/prisma/enums.js"

export interface Product{
    id: string
    nome: string
    descricao: string
    codigo: string
    tamanho: number
    quantidade: number
    volume: number
    categoria: string
    preco: number
    estoque_minimo: number
    status: Status
    created_at: Date
    updated_at: Date
}