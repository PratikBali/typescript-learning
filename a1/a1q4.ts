
function ChkPrime(num) {
  let flag = 0
  let icnt = 2
  let half = Math.round(num / 2)

  while(icnt < half) {
    if (num % icnt === 0) {
      flag = 1
    }
    icnt++
  }

  if (flag === 0) {
  console.log('********************************** \n OUTPUT: Prime ')
} else {
  console.log('********************************** \n OUTPUT: Not Prime ');
  }
 
}

ChkPrime(13)