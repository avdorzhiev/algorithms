// Complexity: O(Log n)

export default function binarySearch(list: number[], item: number): number {
  let low: number = 0, // Start index for search
    high: number = list.length - 1;  // End index for search

  while (low < high) {
    const mid: number = (low + high) / 2, // Get middle index
      guess: number = list[mid];

    if (guess === item) { // Check item with middle index
      return mid;
    }
    if (guess > item) { // More
      high = mid - 1;
    } else { // Less
      low = mid + 1
    }
  }
  return -1;
}
