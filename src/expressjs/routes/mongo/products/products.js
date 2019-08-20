import express from 'express';
import * as products from '../../../controllers/mongo/products';

const mProductRouter = express.Router();

mProductRouter.route('/')
    .get(products.getProducts)
    .post(products.postProduct);

mProductRouter.route('/:id')
    .get(products.getAProduct)
    .delete(products.deleteProduct);

mProductRouter.route('/:id/reviews')
    .get(products.getProductReviews);

export default mProductRouter;