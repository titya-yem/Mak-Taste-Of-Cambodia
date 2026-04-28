import type { Request, Response } from "express";
import {
  createProduct,
  getAllProducts,
  getProductBySlug,
} from "../models/product.model";
import { productSchema } from "../validations/product.validation";

export const creatingProduct = async (req: Request, res: Response) => {
    try {
        const validated = productSchema.parse(req.body);

        const product = await createProduct(validated);

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product,
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create product" });
    }
}

export const getProducts = async (req: Request, res: Response) => {
    try {
      const products = await getAllProducts();

      return res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: products,
      });
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
}

export const getBySlug = async (req: Request, res: Response) => {
    try {
        const slug = req.params.slug as string;

        const product = await getProductBySlug(slug);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        return res.status(200).json({
            success: true,
            message: "Product fetched successfully",
            data: product,
        });
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch product" });
    }
}