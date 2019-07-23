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

class CircleX extends Circle {

  constructor(no) {
    super(no)
    this.radius = no
  }

  Circumference() {
    var circum = this.radius * this.PI * 2
    console.log('********************************** \n OUTPUT: CircleX -> Circumference -> circum', circum);
  }

}

var obj1 = new Circle(10)
obj1.Area()

var obj2 = new CircleX(20)
obj2.Area()

var obj3 = new CircleX(30)
obj3.Circumference()
