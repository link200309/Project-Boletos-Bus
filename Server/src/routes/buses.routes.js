import {Router} from 'express'
const router = Router()
import {getBuses} from '../controllers/buses.controller.js'
router.get('/bus',getBuses)
export default router;
