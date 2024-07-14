import { Router } from 'express';
import userRouter from './userRouter';

const router = Router();

router.use('/v1', userRouter);

export default router;
