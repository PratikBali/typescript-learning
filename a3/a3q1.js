var Arithmatic = /** @class */ (function () {
    function Arithmatic(no1, no2) {
        this.num1 = no1;
        this.num2 = no2;
    }
    Arithmatic.prototype.add = function () {
        return this.num1 + this.num2;
    };
    Arithmatic.prototype.sub = function () {
        return this.num1 - this.num2;
    };
    Arithmatic.prototype.mul = function () {
        return this.num1 * this.num2;
    };
    Arithmatic.prototype.div = function () {
        return this.num1 / this.num2;
    };
    return Arithmatic;
}());
var obj1 = new Arithmatic(10, 12);
var obj2 = new Arithmatic(100, 120);
console.log(obj1.add());
console.log(obj1.sub());
console.log(obj1.mul());
console.log(obj1.div());
console.log(obj2.add());
console.log(obj2.sub());
console.log(obj2.mul());
console.log(obj2.div());
