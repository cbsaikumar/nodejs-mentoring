import express from 'express';
import * as products from '../../controllers/products';

const productRouter = express.Router();

productRouter.route('/').get(products.getAllProducts);
productRouter.route('/:id').get(products.getProduct);


export default productRouter;