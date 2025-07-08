import express from 'express';
import controller from '../controllers/InventarioController.js';
import { validateInventario } from '../validators/validateInventario.js'

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', validateInventario ,controller.create);
router.put('/:id', controller.update);
router.post('/delete/:id', controller.remove);
router.get('/:id/related/:relation', controller.extraData);
router.get('/related/:relation', controller.allExtraData);
router.post('/all/:id', controller.dataAllRelations);
router.post('/data/all', controller.allDataAllRelations);
router.post('/purchase', controller.purchase);
router.post('/sell', controller.sell);

export default router;