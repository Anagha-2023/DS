const arr = [2,5,7,9,3,1,8];

function BubbleSort(arr){
  for(let i=0;i<arr.length-1;i++){
    for(let j=0;j<arr.length-i-1;j++){
      if(arr[j]>arr[j+1]){
        // [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  
  return arr;
}
let result = BubbleSort(arr);
console.log(result);