
export function calculateMean(arr: number[]) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum / arr.length;
}

export function calculateMedian(arr: number[]) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const middle = Math.floor(sortedArr.length / 2);
  if (sortedArr.length % 2 === 0) {
    return (sortedArr[middle - 1] + sortedArr[middle]) / 2;
  } else {
    return sortedArr[middle];
  }
}

export function calculateMode(arr: number[]) {
  const counts: Record<string, number> = {};
  arr.forEach((val) => {
    if (!counts[val]) {
      counts[val] = 0;
    }
    counts[val]++;
  });

  let mode = 0;
  let maxCount = 1;
  for (const val in counts) {
    if (counts[val] > maxCount) {
      maxCount = counts[val];
      mode = parseFloat(val);
    }
  }

  return mode;
}
