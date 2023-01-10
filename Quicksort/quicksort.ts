// Complexity: O(n * Log n)

export default function quicksort(inputArr: number[]): number[] {
  const arr: number[] = JSON.parse(JSON.stringify(inputArr)); // copy initial array
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr[0],
    less = arr.filter(item => item < pivot),
    greater = arr.filter(item => item > pivot);

  return quicksort(less).concat([pivot]).concat(quicksort(greater));
};
