import express from "express";
import { createProduct } from "../Controllers/productController.js";


const router = express.Router();

router.post("/create",createProduct)


export default router;