var Circle = /** @class */ (function () {
    function Circle(rad) {
        this.PI = 3.14;
        this.radius = rad;
    }
    Circle.prototype.Area = function () {
        var area = this.radius * this.radius * this.PI;
        console.log('********************************** \n OUTPUT: Circle -> Area -> area', area);
    };
    return Circle;
}());
var obj1 = new Circle(10);
obj1.Area();
var obj2 = new Circle(20);
obj2.Area();
