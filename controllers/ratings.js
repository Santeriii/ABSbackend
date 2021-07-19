const ratingsRouter = require('express').Router()
const Rating = require('../models/rating')

ratingsRouter.get('/', async (request, response) => {
  const ratings = await Rating
    .find({}).populate('ratings')
  response.json(ratings.map(u => u.toJSON()))
})

ratingsRouter.post('/', async (request, response) => {
  const body = request.body

  const rating = new Rating({
    mal_id: body.mal_id,
    rating: body.rating,
  })

  const savedRating = await rating.save()

  response.json(savedRating)
})

module.exports = ratingsRouter