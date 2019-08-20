import express from 'express';
import productRouter from '../routes/products/products';
import userRouter from '../routes/users/users';
import authRouter from './auth/auth';
import { isAuthenticated } from '../middlewares/jwtTokenVerifier';
import mCititesRouter from './mongo/cities/cities';
import mProductRouter from './mongo/products/products';
import mUserRouter from './mongo/users/users';

const router = express.Router();

router.use('/auth', authRouter);

router.use(isAuthenticated);

router.use('/users', userRouter);
router.use('/products', productRouter);

router.use('/mongo/users', mUserRouter);
router.use('/mongo/products', mProductRouter);
router.use('/mongo/cities', mCititesRouter);


export default router;
