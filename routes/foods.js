import { Router } from 'express'
import * as foodsCtrl from '../controllers/foods.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET - localhost:3000/foods
router.get('/', isLoggedIn, foodsCtrl.index)
//GET - localhost:3000/foods/:id
router.get('/:id', isLoggedIn, foodsCtrl.show)
// GET - localhost:3000/foods/:id/edit
router.get('/:id/edit', isLoggedIn, foodsCtrl.edit)

//POST - localhost:3000/foods
router.post('/', isLoggedIn, foodsCtrl.create)
//POST - localhost:3000/:id/reviews
router.post("/:id/reviews", isLoggedIn, foodsCtrl.createReview)

//PUT - localhost:3000/foods/:id
router.put('/:id', isLoggedIn, foodsCtrl.update)

// DELETE - localhost:3000/foods/:id
router.delete('/:id', isLoggedIn, foodsCtrl.delete)

router.delete('/:id/reviews/:reviewId', isLoggedIn, foodsCtrl.deleteReview)

export {
  router,
}