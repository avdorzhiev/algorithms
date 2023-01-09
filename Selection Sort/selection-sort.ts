// Complexity: O(n^2)

export default function selectionSort(inputArr: number[]): number[] {
  const arr: number[] = JSON.parse(JSON.stringify(inputArr)); // copy initial array
  const len = arr.length;

  for(let i = 0; i < len - 1; i++) {
    let indexMin = i;
    for(let j = i; j < len; j++) {
      if(arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      // Swap items
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }

  return arr;
}
