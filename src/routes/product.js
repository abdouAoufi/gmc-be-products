import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getSingleProduct,
} from "../controllers/product.js";

const productRouter = Router();

// https://localhost:1337/products  [GET]
productRouter.get("/products", getAllProducts);

// https://localhost:1337/product  [POST]
productRouter.post("/product", getSingleProduct);

// https://localhost:1337/create  [POST]
productRouter.post("/create", createProduct);

export default productRouter;
