var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(no) {
        var _this = _super.call(this, no) || this;
        _this.radius = no;
        return _this;
    }
    CircleX.prototype.Circumference = function () {
        var circum = this.radius * this.PI * 2;
        console.log('********************************** \n OUTPUT: CircleX -> Circumference -> circum', circum);
    };
    return CircleX;
}(Circle));
var obj1 = new Circle(10);
obj1.Area();
var obj2 = new CircleX(20);
obj2.Area();
var obj3 = new CircleX(30);
obj3.Circumference();
