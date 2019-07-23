function Fibbonacci(num) {
  var icnt = 0
  var sum = 0
  var prev = 0
  var next = 1

  for (let icnt = 0; sum <= num; icnt++) {
    if (icnt <= 1) {
      sum = icnt
    } else {
      sum = prev + next
      prev = next
      next = sum
    }
    if (sum <= num) {
      console.log(' ', sum, ' ', num);
    }

  }
}

Fibbonacci(21)
