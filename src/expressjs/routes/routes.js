import express from 'express';
import productRouter from '../routes/products/products';
import userRouter from '../routes/users/users';
import authRouter from './auth/auth';
import { isAuthenticated } from '../middlewares/jwtTokenVerifier';

const router = express.Router();

router.use('/auth', authRouter);

router.use(isAuthenticated);
router.use('/users', userRouter);
router.use('/products', productRouter);

export default router;
