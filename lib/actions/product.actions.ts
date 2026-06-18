"use server";

import { mongoConnect } from "@/lib/database/connection";
import Product from "@/lib/database/models/product.model";
import { ProductsParams } from "@/types";

// Get All Products
export async function getAllProducts() {
  try {
    // Connect to the database
    await mongoConnect();
    // Search for products
    const products = await Product.find();

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Get All Products
export async function getProductsByCategory(category: string) {
  try {
    // Connect to the database
    await mongoConnect();
    // Search for products
    const products = await Product.find({ category: category });

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Get All Products
export async function getSearchProducts({ query }: ProductsParams) {
  try {
    // Connect to the database
    await mongoConnect();

    const productName = query ? { name: { $regex: query, $options: "i" } } : {};

    const filters = {
      $and: [productName],
    };

    // Search for products
    const products = await Product.find(filters);

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Get Latest Products
export async function getLatestProducts({ limit }: { limit: number }) {
  try {
    // Connect to the Database
    await mongoConnect();

    // Sort Products
    const products = await Product.find().sort({ _id: -1 }).limit(limit);

    return JSON.parse(JSON.stringify(products));
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Get Product by ID
export async function getProductById(id: string) {
  try {
    await mongoConnect();
    // Get Product
    const product = await Product.findOne({ _id: id });
    return JSON.parse(JSON.stringify(product));
  } catch (error) {
    console.log(error);
    return null;
  }
}
