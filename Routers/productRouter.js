import express from "express";
import { createProduct, deleteProduct, getAllProducts, getProductById, updateProduct } from "../Controllers/productController.js";


const router = express.Router();

router.post("/create",createProduct)
router.get("/getdata",getAllProducts)
router.get("/getdata/:id",getProductById)
router.put("/update/:id",updateProduct)
router.delete("/delete/:id",deleteProduct)

export default router;