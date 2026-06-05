import { Router } from "express"
import { createProductsController, getAllProductsController, getProductByIdController } from "../controllers/products.controller.js"
import { getProductById } from "../services/products.service.js"

const router = Router()

router.get("/produtos", getAllProductsController)
router.get("/produtos/:id",getProductByIdController)

router.post("/produtos",createProductsController)

export default router