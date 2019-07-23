function FindMax(no1, no2, no3) {
    var max = 0;
    if (no1 > no2 && no1 > no3) {
        max = no1;
    }
    else if (no2 > no1 && no2 > no3) {
        max = no2;
    }
    else {
        max = no3;
    }
    return max;
}
var maximum = FindMax(15, 14, 13);
console.log('********************************** \n OUTPUT: maximum', maximum);
