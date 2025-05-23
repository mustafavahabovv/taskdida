import express from "express";
import { deleteProduct, getProduct, postProduct } from "../controller/ProductController.js";



const router = express.Router();

router
    .get('/', getProduct)
    .post('/', postProduct)
    .delete('/:id', deleteProduct);

export default router
