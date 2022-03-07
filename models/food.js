import mongoose from "mongoose"

const Schema = mongoose.Schema

const foodSchema = new Schema ({
  name: {
    type: String,
    required: true,
  },
  prepTime: {
    type: Number,
    min: 0,
  },
  ingredients: {
    type: String,
  }
})

const Food = mongoose.model("Food", foodSchema)

export {
  Food
}