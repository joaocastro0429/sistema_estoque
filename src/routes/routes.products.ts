import { Router } from "express"
import { getAllProductsController } from "../controllers/products.controller.js"

const router = Router()

router.get("/", getAllProductsController)

export default router