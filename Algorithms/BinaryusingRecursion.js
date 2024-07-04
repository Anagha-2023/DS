function BinarysearchusingRecursion(arr,target,left = 0,right = arr.length-1){
  if(left > right){
    return -1;
  }

  let mid = Math.floor((left+right)/2);

  if(arr[mid] === target){
    return mid;
  }
  else if (arr[mid] < target) {
    return BinarysearchusingRecursion(arr,target,mid+1,right);
  }
  else{
    return BinarysearchusingRecursion(arr,target,left,mid-1);
  }
}

console.log(BinarysearchusingRecursion([10,20,30,40,50],40));