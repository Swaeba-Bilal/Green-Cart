import exxpress from 'express';
import { register, login } from '../controllers/userController.js';

const userRouter = exxpress.Router();

userRouter.post('/register', register)
userRouter.post('/login', login)

export default userRouter;