function binarySearch(arr,target){
  let low = 0;
  let high = arr.length-1;

  while(low<=high){
    let mid = Math.floor((low+high)/2);
    let guess = arr[mid];

    if(guess === target){
      return mid;
    }else if(guess<target){
      low = mid + 1;
    }else{
      high = mid -1;
    }
  }
  return -1;
}

const arr = [5,10,15,20,25];
console.log(binarySearch(arr,10));