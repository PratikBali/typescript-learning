var arr = [23, 89, 6, 29, 56, 45, 77, 32];
function Sum() {
    var sum = 0;
    arr.forEach(function (element) {
        sum = sum + element;
    });
    return sum;
}
var sum = Sum();
console.log('********************************** \n OUTPUT: sum', sum);
