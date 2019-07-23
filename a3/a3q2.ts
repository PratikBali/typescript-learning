class Circle {
  radius
  PI = 3.14

  constructor(rad) {
    this.radius = rad
  }

  Area() {
    var area = this.radius * this.radius * this.PI
    console.log('********************************** \n OUTPUT: Circle -> Area -> area', area);
  }
}

var obj1 = new Circle(10)
obj1.Area()

var obj2 = new Circle(20)
obj2.Area()
