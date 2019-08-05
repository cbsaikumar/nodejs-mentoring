import express from 'express';
import * as auth from '../../controllers/auth';

const authRouter = express.Router();

authRouter.route('/').post(auth.auth);

export default authRouter;