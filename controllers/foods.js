import { Food } from '../models/food.js'

function index(req, res) {
  console.log("FOODS")
  Food.find({})
  .then(foods => {
    res.render('foods/index', {
      foods,
      title: 'All Food',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/foods')
  })
}

export {
  index
}