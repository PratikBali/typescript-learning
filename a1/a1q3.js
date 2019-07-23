function DisplayFactors(num) {
    var half = Math.round(num / 2);
    console.log('********************************** \n OUTPUT: DisplayFactors -> half', half);
    for (var index = 0; index <= half; index++) {
        if (num % index === 0) {
            console.log('Factors -> ', index);
        }
    }
}
DisplayFactors(14);
