const Cars = require('./cars-model')
const vinValidator = require('vin-validator')
const db = require('../../data/db-config')

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
  const error = { status: 400 }
  const { vin, make, model, mileage } = req.body
  if (vin === undefined) {
    error.message = `vin is missing`
    next(error)
  } else if (make === undefined) {
    error.message = `make is missing`
    next(error)
  } else if (model === undefined) {
    error.message = `model is missing`
    next(error)
  } else if (mileage === undefined) {
    error.message = `mileage is missing`
    next(error)
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  try {
    const isVinValid = vinValidator.validate(req.body.vin)
    if (isVinValid === false) {
      next({ status: 400, message: `vin ${req.body.vin} is invalid` })
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const existing = await db('cars').where('vin', req.body.vin).first()
    if (!existing) {
      next()
    } else {
      next({ status: 400, message: `vin ${req.body.vin} already exists` })
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique,
}
