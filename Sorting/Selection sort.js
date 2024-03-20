const arr = [16,56,12,10,78,100];

function Selectionsort(arr){
  for(let i=0;i<arr.length;i++){
    let small = i;
    for(let j=i+1;j<arr.length;j++){
      if(arr[small]>arr[j]){
        small = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[small];
    arr[small] = temp;
  }
  return arr;
}

console.log(Selectionsort(arr));