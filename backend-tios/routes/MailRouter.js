import express from 'express';
import * as controller from '../controllers/MailController.js';

const router = express.Router();

router.post('/', controller.sendMail);
router.post('/file', controller.sendMailFile);

export default router;