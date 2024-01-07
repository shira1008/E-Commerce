import express from 'express';
const router = express.Router();
// import products from '../data/products.js';
import {
  getProducts,
  getProductsById,
} from '../controllers/productController.js';

//api/products

router.route('/').get(getProducts);
router.route('/:id').get(getProductsById);

export default router;
