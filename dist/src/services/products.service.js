import { prisma } from '../lib/prisma.js';
export const getAllProducts = async () => {
    const product = await prisma.produto.findMany({
        orderBy: {
            created_at: "desc",
        },
    });
    return product;
};
export const createProduct = async (product) => {
    const products = await prisma.produto.create({
        data: product
    });
    return products;
};
