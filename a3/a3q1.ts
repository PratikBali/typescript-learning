class Arithmatic {
  num1: number;
  num2: number;

  constructor(no1: number, no2: number) {
    this.num1 = no1;
    this.num2 = no2;
  }

  add() {
    return this.num1 + this.num2
  }

  sub() {
    return this.num1 - this.num2;
  }

  mul() {
    return this.num1 * this.num2
  }

  div() {
    return this.num1 / this.num2
  }
}

var obj1 = new Arithmatic(10, 12)
var obj2 = new Arithmatic(100, 120)

console.log(obj1.add());
console.log(obj1.sub());
console.log(obj1.mul());
console.log(obj1.div());

console.log(obj2.add());
console.log(obj2.sub());
console.log(obj2.mul());
console.log(obj2.div());

