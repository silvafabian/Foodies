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

function create(req, res) {
  console.log('this is create')
  req.body.owner = req.user.profile._id
  Food.create(req.body)
  .then(food => {
    res.redirect('/foods')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/foods')
  })
}

function show(req, res) {
  Food.findById(req.params.id)
  .populate("owner")
  .then(food => {
    res.render('foods/show', {
      food,
      title: "Some title"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/foods')
  })
}

export {
  index,
  create,
  show,
}