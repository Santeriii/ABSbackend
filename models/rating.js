const mongoose = require('mongoose')

const ratingSchema = mongoose.Schema({
  mal_id: Number,
  rating: Number,
})

ratingSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

const Rating = mongoose.model('Rating', ratingSchema)

module.exports = Rating