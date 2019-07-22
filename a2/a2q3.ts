var arr = [23, 89, 6, 29, 56, 45, 77, 32];

function SecondMax() {
  var first_max = 0
  var second_max = 0
  arr.forEach(element => {
    if (first_max < element) {
      second_max = first_max;
      first_max = element;
    } else if (second_max < element) {
      second_max = element;
    }
  });

  return second_max
}

var second_max = SecondMax()
console.log('********************************** \n OUTPUT: second_max', second_max);


