import exxpress from 'express';
import { register } from '../controllers/userController.js';

const userRouter = exxpress.Router();

userRouter.post('/register', register)

export default userRouter;