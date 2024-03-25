function binarysearch(arr,target){
  let low = 0;
  let high = arr.length-1;
  while(low <= high){
    let mid = Math.floor((low+high)/2);

    if(arr[mid]===target){
      arr[mid] = 0
      return arr[mid];
    }else if(arr[mid]<target){
      low = mid+1;
    }else{
      high = mid-1;
    }
  }
  return -1;
}

const arr = [1,2,3,4,5,6,7,8,9];
console.log(binarysearch(arr,7));
console.log(arr);