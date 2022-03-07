import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/foods
router.get('/', foodsCtrl.index)
//GET - localhost:3000/foods/:id
router.get('/:id', foodsCtrl.show)
// GET - localhost:3000/foods/:id/edit
router.get('/:id/edit', isLoggedIn, foodsCtrl.edit)

//POST - localhost:3000/foods
router.post('/', isLoggedIn, foodsCtrl.create)

//PUT - localhost:3000/foods/:id
router.put('/:id', foodsCtrl.update)




export {
  router,
}