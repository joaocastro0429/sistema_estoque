import { Router } from "express";
import { createProductsController, getAllProductsController } from "../controllers/products.controller.js";
const router = Router();
router.get("/produtos", getAllProductsController);
router.post("/produtos", createProductsController);
export default router;
