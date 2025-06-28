import express from 'express';
import updateLocation from '../controllers/UpdateLocationController.js';

const router = express.Router();

router.put('/:id', updateLocation);


export default router
