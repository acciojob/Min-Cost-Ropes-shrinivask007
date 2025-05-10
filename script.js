function mincost(arr)
{ 
//write your code here
// return the min cost
 if (arr.length <= 1) return 0;

  // Turn the array into a min-heap by sorting it
  arr.sort((a, b) => a - b);

  let cost = 0;

  while (arr.length > 1) {
    // Take two smallest elements
    let first = arr.shift();
    let second = arr.shift();

    let sum = first + second;
    cost += sum;

    // Insert the sum back into the sorted array at correct position
    let i = 0;
    while (i < arr.length && arr[i] < sum) i++;
    arr.splice(i, 0, sum);
  }

  return cost;
  
}

module.exports=mincost;
