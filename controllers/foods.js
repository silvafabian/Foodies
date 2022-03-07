import { Food } from '../models/food.js'

function index(req, res) {
  console.log("FOODS")
  Food.find({})
  .then(foods => {
    res.render('foods/index', {
      foods,
      title: 'Delicious Food',
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
      title: "Food Details"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/foods')
  })
}

function edit(req, res) {
  Food.findById(req.params.id)
  .then(food => {
    res.render('foods/edit', {
      food,
      title: "Edit Food"
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
  edit,
}