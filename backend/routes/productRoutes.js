import express from 'express';
const router = express.Router();
import { createProduct,
         getProducts,
         getProductsById,
         updateProduct,
         deleteProduct,
         createProductReview,
         getTopProducts
        } from '../controllers/productController.js';

import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts); //we have to put it above the /:id otherwise it's gonna treat 'top' as an id
router
  .route('/:id')
  .get(getProductsById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
router.route('/:id/reviews').post(protect, createProductReview);

export default router;