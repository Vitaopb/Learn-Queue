import { Router } from 'express';
import { saveFiles, removeFiles } from './controller/file';
const router = Router();



router.post('/files', saveFiles);
router.delete('/files', removeFiles);

export { router }