const Cars = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try {
    const car = await Cars.getById(req.params.id)
    if (car) {
      req.car = car
      next()
    } else {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`,
      })
    }
  } catch (err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  console.log('payload working')
  next()
}

const checkVinNumberValid = (req, res, next) => {
  console.log('vin valid working')
  next()
}

const checkVinNumberUnique = (req, res, next) => {
  console.log('vin unique working')
  next()
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
