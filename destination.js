function minimumPlanesNeeded(fuelArray) {
  const N = fuelArray.length;

  // Creating an array to store the minimum number of planes needed to reach each airport
  const planesNeeded = new Array(N).fill(Infinity);
  planesNeeded[0] = 0; // We don't need any plane to reach the starting airport

  // Traversing through each airport
  for (let i = 0; i < N; i++) {
    // Checking if it's possible to reach this airport from the previous airports
    if (planesNeeded[i] === Infinity) {
      return -1;
    }

    // Hiring a plane from the current airport and updating the number of planes needed for the next airports
    for (let j = i + 1; j <= Math.min(i + fuelArray[i], N - 1); j++) {
      planesNeeded[j] = Math.min(planesNeeded[j], planesNeeded[i] + 1);
    }
  }

  return planesNeeded[N - 1]; // Returning the minimum number of planes needed to reach the last airport
}

// Example usage:
const fuelArray1 = [2, 1, 2, 3, 1];
console.log(minimumPlanesNeeded(fuelArray1)); // Output: 2

const fuelArray2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(minimumPlanesNeeded(fuelArray2)); // Output: 3
