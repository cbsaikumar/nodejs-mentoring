import express from 'express';
import * as users from '../../../controllers/mongo/users';

const mUserRouter = express.Router();

mUserRouter.route('/')
    .get(users.getUsers)
    .post(users.postUser);

mUserRouter.route('/:d')
    .delete(users.deleteUser);

export default mUserRouter;