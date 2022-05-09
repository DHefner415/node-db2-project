// STRETCH
const cars = [
  {
    vin: '11212',
    make: 'Chevy',
    model: 'Camaro',
    mileage: 19283,
    title: 'clean',
    transmission: 'manual',
  },
  {
    vin: '22323',
    make: 'Dodge',
    model: 'Charger',
    mileage: 3873,
    title: 'clean',
    transmission: 'auto',
  },
  {
    vin: '33434',
    make: 'Chrysler',
    model: '300',
    mileage: 98173,
    title: 'salvage',
    transmission: 'auto',
  },
  {
    vin: '44545',
    make: 'BMW',
    model: 'x6 M',
    mileage: 0,
    title: 'clean',
    transmission: 'auto',
  },
  {
    vin: '55656',
    make: 'Audi',
    model: 'S5',
    mileage: 349,
    title: 'salvage',
    transmission: 'manual',
  },
  {
    vin: '66767',
    make: 'Jaguar',
    model: 'F-Type',
    mileage: 0,
    title: '',
    transmission: '',
  },
  {
    vin: '77878',
    make: 'Volvo',
    model: 'XC90',
    mileage: 4,
    title: '',
    transmission: '',
  },
  {
    vin: '88989',
    make: 'Toyota',
    model: 'Supra',
    mileage: 67393,
    title: '',
    transmission: '',
  },
  {
    vin: '99090',
    make: 'Acura',
    model: 'NSX',
    mileage: 0,
    title: '',
    transmission: '',
  },
]
exports.cars = cars

exports.seed = function (knex) {
  return knex('cars')
    .truncate()
    .then(function () {
      return knex('cars').insert(cars)
    })
}
