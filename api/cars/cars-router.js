const Cars = require('./cars-model')
const mw = require('./cars-middleware')
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const cars = await Cars.getAll()
    res.json(cars)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', mw.checkCarId, async (req, res, next) => {
  //eslint-disable-line
  res.json(req.car)
})

router.post(
  '/',
  mw.checkCarPayload,
  mw.checkVinNumberUnique,
  mw.checkVinNumberValid,
  async (req, res, next) => {
    console.log('testing post')
    next()
  }
)

router.put(
  '/:id',
  mw.checkCarId,
  mw.checkCarPayload,
  async (req, res, next) => {
    console.log('testing put')
    next()
  }
)

router.delete('/:id', mw.checkCarId, async (req, res, next) => {
  console.log('testing delete')
  next()
})

module.exports = router
