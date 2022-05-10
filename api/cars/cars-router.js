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

//eslint-disable-next-line
router.get('/:id', mw.checkCarId, async (req, res, next) => {
  res.json(req.car)
})

router.post(
  '/',
  mw.checkCarPayload,
  mw.checkVinNumberUnique,
  mw.checkVinNumberValid,
  async (req, res, next) => {
    try {
      const newCar = await Cars.create({
        vin: req.body.vin,
        make: req.body.make.trim(),
        model: req.body.model.trim(),
        mileage: req.body.mileage,
        title: req.body.title,
        transmission: req.body.transmission,
      })
      res.status(201).json(newCar)
    } catch (err) {
      next(err)
    }
  }
)

router.put(
  '/:id',
  mw.checkCarId,

  async (req, res, next) => {
    try {
      const update = await Cars.updateById(req.params.id, req.body)
      res.json(update)
    } catch (err) {
      next(err)
    }
  }
)

router.delete('/:id', mw.checkCarId, async (req, res, next) => {
   try {
     await Cars.deleteById(req.params.id)
     res.json(req.car)
   } catch (err) {
     next(err)
   }
})

//eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  })
})

module.exports = router
