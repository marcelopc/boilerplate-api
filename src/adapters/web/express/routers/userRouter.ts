import Express from 'express';

const router = Express.Router();

router.get('/user', (req, res) => {
  return res.send('Hello World!');
});

export default router;
