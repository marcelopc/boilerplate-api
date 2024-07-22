import Express from 'express';
import { validator } from '../middleware/validator/bodyValidator';

const router = Express.Router();

router.post(
  '/transacoes/:transacaoCodigo/link',
  (req, res, next) => validator(req, res, next, 'pagamento'),
  (req, res, next) => {
    return res.send({ message: 'pagamento', body: req.body });
  }
);

router.use((err, req, res, next) => {
  res.status(400).send(err.message);
});
export default router;
