class Car {
  constructor (num) {
    this.num = num
  }
}

class Camera {
  shot(car) {
    return {
      num: car.num,
      inTime: Date.now()
    }
  }
}

class Part {
  constructor (floors) {
    this.floors = floors || []
    this.camera = new Camera
    this.carList = {}
  }
  in (car) {
    this.floors.forEach(floor => {
      let num = floor.emptyNum()
      console.log()
    })
  }
  out (car) {

  }
  emptyNum () {
    let num = 0
    return this.floors.map(floor => {
      return `第${floor.index}层，还有${floor.emptyNum()}个车位`
    }).join('\n')
  }
}

class Floors {
  constructor (index, places) {
    this.index = index
    this.places = places || []
  }
  emptyNum () {
    let num = 0
    this.places.forEach(place => {
      if (place.isEmpty) {
        num += 1
      }
    })
    return num
  }
}

class Places {
  constructor () {
    this.isEmpty = true
  }
  in () {
    this.isEmpty = false
  }
  out () {
    this.empty = true
  }
}