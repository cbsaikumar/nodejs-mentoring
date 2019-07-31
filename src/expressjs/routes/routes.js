import express from 'express';
import productRouter from '../routes/products/products';
import userRouter from '../routes/users/users';

const router = express.Router();

router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;
