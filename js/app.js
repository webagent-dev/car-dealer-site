// preloader
window.addEventListener('load', () => {
  document.querySelector('.preloader')
    .classList.add('hidepre')
})
//  ceate a class
const CreateCar = (() => {
  const cars = []
  // car data
  class CarData {
    constructor (make, country, img, special, mode, price, type, trans, gas) {
      this.make = make
      this.country = country
      this.img = img
      this.special = special
      this.img = img
      this.special = special
      this.mode = mode
      this.price = price
      this.type = type
      this.trans = trans
      this.gas = gas
    }
  }

  // call the construtor
  function makeCar (make, country, img = './image/other-2.jpg', special = true, mode = 'new model', price = 1000, type = 'sudan', trans = 'automatic', gas = 50) {
    // call class
    const car = new CarData(make, country, img, special, mode, price, type, trans, gas)
    cars.push(car)
  }
  // fuction call cars
  function myCars () {
    makeCar('mercedes', 'american', '../image/bez-1.jpg', true, undefined)
    makeCar('mercedes', 'american', '../image/bez-6.jpg', false)
    makeCar('bmw', 'american', './image/bmw-2.jpg', true, undefined)
    makeCar('mercedes', 'american', '../image/bez-2.jpg', true, undefined)
    makeCar('mercedes', 'american', '../image/bmw-3.jpg', false)
    makeCar('mercedes', 'american', '../image/bez-4.jpg', false)
    makeCar('mercedes', 'american', '../image/other-3.jpg', false)
    makeCar('mercedes', 'american', '../image/chev-3.jpg', false)
    // german cars
    makeCar('chevy', 'german', '../image/chev-4.jpg', false)
    makeCar('bmw', 'german', '../image/bmw-1.jpg', false, undefined)
    makeCar('chevy', 'german', '../image/chev-5.jpg', false)
    makeCar('chevy', 'german', '../image/chev-6.jpg', true, undefined)
    makeCar('chevy', 'german', '../image/other-2.jpg', true)
    makeCar('chevy', 'german', '../image/chev-2.jpg', true)
    makeCar('chevy', 'german', '../image/other-1.jpg', true)
    makeCar('chevy', 'german', '../image/chev-1.jpg', true)
  }
  myCars(cars)
  // filter special cars
  const specialCar = cars.filter((car) => {
    return car.special === true
  })

  return {
    cars,
    specialCar
  }
})()

// display car data

const displayCar = ((CreateCar) => {
  const theCar = CreateCar.specialCar
  const info = document.querySelector('.feature-info')
  // document loaded event
  document.addEventListener('DOMContentLoaded', () => {
    info.innerHTML = ''
    let data = '';
    theCar.forEach((item) => {
      data += `
         <div class="my-3 p-2 d-flex text-capitalize features   align-item-baseline flex-wrap">
                    <span data-img='img' class="icons mr-2">
                        <i class="fas fa-car"></i>
                    </span>
                    <h5 class="mx-1 font-weight-bold">${item.make}</h5>
                     <h5 class="mx-1">${item.mode}</h5>
                </div>
        `
    })

    info.innerHTML = data
  })
  // change image
  info.addEventListener('click', (e) => {
    // console.log(e.target.classList.contains('icons'))
    if (e.target.parentElement.classList.contains('icons')) {
      const img = e.target.parentElement.dataset.img
      const newImage = document.querySelector('#photos')
      newImage.src = img
    }
  })
})(CreateCar)

//  get all cars

const displayAllCar = ((CreateCar) => {
  const allCar = CreateCar.cars
  // add event to the dom
  document.addEventListener('DOMContentLoaded', () => {
    const inventory = document.querySelector('.invertory-container')
    inventory.innerHTML = ''
    let outPut = ''
    allCar.forEach((car) => {
      outPut += `
            <div class="col-10 mx--auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
            <div class="card car-card">
                <img src="${car.img}" alt="car -1" 
                        class="card-img-top car-img">
                <div class="card-body">
                    <div class="card-info d-flex 
                        justify-content-between">
                        <div class="car-text text-uppercase">
                            <h6 class="font-weight-bold">${car.make}</h6>
                            <h6>${car.mode}</h6>
                        </div>
                        <h5 class="py-2 px-3 alig-self-center 
                            car-value">$
                            <span class="car-price">${car.price}</span>
                        </h5>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between 
                      text-capitalize">
                <p><span><i class="fas fa-car"></i>${car.type}</span></p>
                <p><span><i class="fas fa-cogs"></i>${car.trans}</span></p>
                <p><span><i class="fas fa-gas-pump"></i>${car.gas}</span></p>
                </div> 
            </div>
        </div>
            `
    })
    inventory.innerHTML = outPut
  })
})(CreateCar)

const funBtn = (() => {
  const filterBtn = document.querySelectorAll('.filter-btn')
  filterBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const value = e.target.dataset.filter
      // console.log(value)
      const singleItems = document.querySelectorAll('.single-car')

      singleItems.forEach((item) => {
        if (value === 'all') {
          item.style.display = 'block'
        } else {
          (!item.classList.contains(value)) ? item.style.display = 'none' : item.style.display = 'block'
        }
      })
    })
  })
})()
