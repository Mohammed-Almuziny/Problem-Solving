function highestRank(arr) {
  let map = {};
  let mostFrq = arr[0];
  let maxCount = 1;

  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (map[el] == null) map[el] = 1;
    else map[el]++;
    if (map[el] > maxCount) {
      mostFrq = el;
      maxCount = map[el];
    }
  }

  return mostFrq;
}

console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
