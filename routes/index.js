import { Router } from 'express'

const router = Router()

router.get('/', function (req, res) {
  res.render('home', { title: 'Home Page', user: req.user ? req.user : null })
})

export {
  router
}
