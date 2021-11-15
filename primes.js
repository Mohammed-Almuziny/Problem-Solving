function primes(start, end) {
  const primesList = [];
  let isPrime = true;

  if (start === 1) start++;
  if (start === 2) primesList.push(start++);

  for (start; start <= end; start++) {
    for (let j = start - 1; j > 1; j--) {
      if (start % j === 0) isPrime = false;
    }

    isPrime ? primesList.push(start) : (isPrime = true);
  }

  return primesList[0] ? primesList : null;
}

console.log(primes(100, 200));
