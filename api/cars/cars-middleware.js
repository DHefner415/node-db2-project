const checkCarId = (req, res, next) => {
  console.log('id working')
  next()
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
