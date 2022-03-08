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

function update(req, res) {
  Food.findById(req.params.id)
  .then(food => {
    if (food.owner.equals(req.user.profile._id)) {
      food.updateOne(req.body, {new: true})
      .then(()=> {
        res.redirect(`/foods/${food._id}`)
      })
    } 
    else {
      throw new Error ('🚫 Not authorized 🚫')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/foods`)
  })
}

function deleteFood(req, res) {
  Food.findById(req.params.id)
  .then(food => {
    if (food.owner.equals(req.user.profile._id)) {
      food.delete()
      .then(() => {
        res.redirect('/foods')
      })
    } 
    else {
      throw new Error ("Cannot Delete Food That Doesn't Belong To You!")
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/foods')
  })
}

function createReview(req, res) {
  Food.findById(req.params.id)
  .then (err, food => {
    food.reviews.push(req.body)
    food.save(function(err) {
      res.redirect(`/foods/${food._id}`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/foods/${food._id}`)
  })
}

export {
  index,
  create,
  show,
  edit,
  update,
  deleteFood as delete,
  createReview,
}