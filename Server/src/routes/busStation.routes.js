import {Router} from 'express'
const router = Router()
import {getBuses} from '../controllers/busStation.controller.js'
router.get('/busStation',getBuses)
export default router;
