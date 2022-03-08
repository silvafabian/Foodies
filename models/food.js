import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5}
}, {
  timestamps: true
})

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
  },
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  reviews: [reviewSchema],
}, {
  timestamps: true,
})

const Food = mongoose.model("Food", foodSchema)

export {
  Food
}