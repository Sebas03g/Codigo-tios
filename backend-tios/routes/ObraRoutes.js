import express from 'express';
import controller from '../controllers/ObraController.js';
import { validateObra } from '../validators/create/validateObra.js'

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', validateObra ,controller.create);
router.put('/:id', controller.update);
router.post('/delete/:id', controller.remove);
router.get('/:id/related/:relation', controller.extraData);
router.get('/related/:relation', controller.allExtraData);
router.post('/all/:id', controller.dataAllRelations);
router.post('/data/all', controller.allDataAllRelations);
router.post('/filtered/data', controller.findAllFilter);
router.post('/assign/proforma', controller.assign_proforma);

export default router;