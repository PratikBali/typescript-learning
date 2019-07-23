function Fibbonacci(num) {
    var icnt = 0;
    var sum = 0;
    var prev = 0;
    var next = 1;
    for (var icnt_1 = 0; sum <= num; icnt_1++) {
        if (icnt_1 <= 1) {
            sum = icnt_1;
        }
        else {
            sum = prev + next;
            prev = next;
            next = sum;
        }
        if (sum <= num) {
            console.log(' ', sum, ' ', num);
        }
    }
}
Fibbonacci(21);
