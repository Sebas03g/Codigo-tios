import express from 'express';

export const baseRouter = (controller, validateData) => {
    const router = express.Router();
    
    router.get('/', controller.findAll);
    router.get('/:id', controller.findById);
    router.post('/', validateData ,controller.create);
    router.put('/:id', controller.update);
    router.post('/delete/:id', controller.remove);
    router.get('/:id/related/:relation', controller.extraData);
    router.get('/related/:relation', controller.allExtraData);
    router.post('/all/:id', controller.dataAllRelations);
    router.post('/data/all', controller.allDataAllRelations);
    return router;
}