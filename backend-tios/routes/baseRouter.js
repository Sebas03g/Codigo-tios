import express from 'express';

export const baseRouter = (controller, validateData) => {
    const router = express.Router();
    
    router.get('/', controller.findAll);
    router.get('/:id', controller.findById);
    router.post('/', validateData, controller.create);
    router.put('/:id', validateData, controller.update);
    router.post('/:id', controller.remove);
    router.get('/:id/related/:relation', controller.extraData);
    router.get('/related/:relation', controller.allExtraData);
    return router;
}