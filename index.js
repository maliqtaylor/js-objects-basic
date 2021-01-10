//object literals
const circle = {
  area: 25,
  radius: 5,
  location: {
    x: 5,
    y: 5
  },
  isVisable: true,
  getLocation: function () {
    console.log(`(${this.location.x}, ${this.location.y})`)
  }
}

// console.log(circle)

circle.getLocation()//getLocation is method of the circle object

//factory functions
function createCircle(area, radius, location) {
  return {
    area,
    radius,
    location,
    isVisable: true,
    //alternative approach to define a function inside an object 
    getLocation() {
      console.log(`(${this.location.x}, ${this.location.y})`)
    }
  }
}

const factory_circle = createCircle(16, 4, { x: 4, y: 4 },)
// console.log(factory_circle)

/* the beauty of a factory function is that code logic 
is defined in one place and easily reusable/refactored */

/* note: factory functions are camelCased 
and constructor functions are PascalCased */

//constructor functions
function ConstructorCircle(area, radius, location) {
  this.area = area
  this.radius = radius
  this.location = { location }
  this.getLocation = () => {
    console.log(`(${this.location.x}, ${this.location.y})`)
  }
}

const constructed_circle = new ConstructorCircle(9, 3, { x: 3, y: 3 })
// console.log(constructed_circle);
console.log(constructed_circle.constructor);