import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/foods
router.get('/', foodsCtrl.index)

//POST - localhost:3000/foods
router.post('/', isLoggedIn, foodsCtrl.create)

export {
  router,
}