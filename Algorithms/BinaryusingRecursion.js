function BinaryusingRecursion(arr,target,left=0,right=arr.length-1){

  if(left>right){
    return -1;
  }

  const mid = Math.floor((left+right)/2);

  if(arr[mid] === target){
    return mid;
  }
  else if(arr[mid]<target){
    return BinaryusingRecursion(arr,target,mid+1,right);
  }else{
    return BinaryusingRecursion(arr,target,left,mid-1);
  }
}

const arr =[1,2,3,4,5,6,7,8,9]
console.log(BinaryusingRecursion(arr,1));