import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'

const router = Router()

// GET - localhost:3000/foods
router.get('/', foodsCtrl.index)

export {
  router,
}