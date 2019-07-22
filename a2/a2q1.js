var arr = [23, 89, 6, 29, 56, 45, 77, 32];
function Max() {
    var max = 0;
    arr.forEach(function (element) {
        if (element > max) {
            max = element;
        }
    });
    return max;
}
var maximum = Max();
console.log('********************************** \n OUTPUT: maximum', maximum);
